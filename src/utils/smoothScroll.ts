export const smoothScrollTo = (elementId: string, offset: number = 0, delay: number = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, delay);
  }
};

export const smoothScrollToWithEasing = (elementId: string, offset: number = 0, delay: number = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const distance = targetPosition - startPosition;
    const duration = 800; // 800ms duration
    let startTime: number;

    // Easing function (ease-in-out-cubic)
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(animateScroll);
    }, delay);
  }
};

// Add smooth scrolling behavior to all anchor links
export const initSmoothScrolling = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        // Use enhanced smooth scroll with delay and easing
        smoothScrollToWithEasing(targetId, 80, 150); // 80px offset, 150ms delay
      }
    });
  });
};

// Enhanced scroll behavior for better UX
export const initEnhancedScrolling = () => {
  // Add momentum scrolling for mobile
  document.body.style.webkitOverflowScrolling = 'touch';
  
  // Add scroll padding for better section visibility
  document.documentElement.style.scrollPaddingTop = '80px';
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Add scroll delay for better perceived performance
  let scrollTimeout: NodeJS.Timeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Scroll has stopped, can trigger animations or other effects
    }, 150);
  });
};
