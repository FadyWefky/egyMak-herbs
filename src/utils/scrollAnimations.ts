export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all elements with scroll animation class
  const animatedElements = document.querySelectorAll('.scroll-animate');
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};

// Add CSS for scroll animations
export const addScrollAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .scroll-animate {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .scroll-animate.animate-slide-up {
      opacity: 1;
      transform: translateY(0);
    }
    
    .scroll-animate.delay-100 {
      transition-delay: 100ms;
    }
    
    .scroll-animate.delay-200 {
      transition-delay: 200ms;
    }
    
    .scroll-animate.delay-300 {
      transition-delay: 300ms;
    }
    
    .scroll-animate.delay-400 {
      transition-delay: 400ms;
    }
    
    .scroll-animate.delay-500 {
      transition-delay: 500ms;
    }
    
    .scroll-animate.delay-600 {
      transition-delay: 600ms;
    }
    
    .scroll-animate.delay-700 {
      transition-delay: 700ms;
    }
    
    .scroll-animate.delay-800 {
      transition-delay: 800ms;
    }
    
    .scroll-animate.delay-900 {
      transition-delay: 900ms;
    }
    
    .scroll-animate.delay-1000 {
      transition-delay: 1000ms;
    }
  `;
  document.head.appendChild(style);
};
