import { useEffect, useRef, useCallback } from 'react';

interface UseFocusManagementOptions {
  trapFocus?: boolean;
  restoreFocus?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
}

export const useFocusManagement = (options: UseFocusManagementOptions = {}) => {
  const { trapFocus = false, restoreFocus = false, initialFocusRef } = options;
  const containerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  const focusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    return Array.from(containerRef.current.querySelectorAll(focusableSelectors)) as HTMLElement[];
  }, []);

  const trapFocusHandler = useCallback((event: KeyboardEvent) => {
    if (!trapFocus || !containerRef.current) return;

    if (event.key === 'Tab') {
      const focusable = focusableElements();
      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    }
  }, [trapFocus, focusableElements]);

  useEffect(() => {
    if (trapFocus) {
      document.addEventListener('keydown', trapFocusHandler);
      return () => document.removeEventListener('keydown', trapFocusHandler);
    }
  }, [trapFocus, trapFocusHandler]);

  useEffect(() => {
    if (restoreFocus && previousActiveElement.current) {
      const element = previousActiveElement.current as HTMLElement;
      element.focus();
    }
  }, [restoreFocus]);

  const saveActiveElement = useCallback(() => {
    previousActiveElement.current = document.activeElement;
  }, []);

  const focusFirstElement = useCallback(() => {
    const focusable = focusableElements();
    focusable[0]?.focus();
  }, [focusableElements]);

  const focusLastElement = useCallback(() => {
    const focusable = focusableElements();
    focusable[focusable.length - 1]?.focus();
  }, [focusableElements]);

  return {
    containerRef,
    saveActiveElement,
    focusFirstElement,
    focusLastElement,
    focusableElements
  };
};

export default useFocusManagement;
