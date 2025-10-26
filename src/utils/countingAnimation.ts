export const animateCount = (
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = 2000,
  suffix: string = ''
) => {
  const startTime = performance.now();
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (end - start) * easeOutQuart);
    
    element.textContent = current.toLocaleString() + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};

// Intersection Observer for counting animations
export const initCountingAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const text = element.textContent || '';
          
          // Extract number from text
          const match = text.match(/(\d+(?:,\d+)*(?:\.\d+)?)/);
          if (match) {
            const targetNumber = parseFloat(match[1].replace(/,/g, ''));
            const suffix = text.replace(match[1], '').trim();
            
            // Start counting animation
            animateCount(element, 0, targetNumber, 2000, suffix);
            
            // Stop observing this element
            observer.unobserve(element);
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  
  // Observe all elements with counting animation class
  const countingElements = document.querySelectorAll('.counting-animation');
  countingElements.forEach((element) => {
    observer.observe(element);
  });
};
