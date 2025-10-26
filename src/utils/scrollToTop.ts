// Scroll to top utility
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Scroll to top instantly (for route changes)
export const scrollToTopInstant = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
};

// Scroll to top with delay
export const scrollToTopWithDelay = (delay: number = 100) => {
  setTimeout(() => {
    scrollToTopInstant();
  }, delay);
};
