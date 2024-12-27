import { useEffect } from "react";

export const useScrollEffects = () => {
  useEffect(() => {
    // Enhanced parallax effect with bi-directional smooth movement
    const handleParallax = () => {
      const elements = document.querySelectorAll(".parallax-element");

      elements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Calculate the scroll position relative to the element
        const relativeScroll = window.pageYOffset - elementTop + windowHeight;

        // Calculate the movement range
        const startPoint = -windowHeight;
        const endPoint = elementRect.height + windowHeight;
        const scrollRange = endPoint - startPoint;

        // Calculate the progress (0 to 1) of the scroll through the element's range
        const scrollProgress = Math.max(
          0,
          Math.min(1, relativeScroll / scrollRange)
        );

        // Calculate the transform distance based on scroll progress
        const maxMove = 100; // Maximum pixels to move
        const movement = (scrollProgress - 0.5) * maxMove * speed;

        // Apply smooth transform
        element.style.transform = `translate3d(0, ${movement}px, 0)`;
        element.style.transition =
          "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      });
    };

    // Scroll reveal effect
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Check if element is in viewport
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
          element.classList.add("active");
        } else {
          // Only remove the active class if we want the element to re-reveal
          // element.classList.remove('active');
        }
      });
    };

    // Scroll trigger effect
    const handleScrollTrigger = () => {
      const triggers = document.querySelectorAll(".scroll-trigger");
      const windowHeight = window.innerHeight;

      triggers.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
          element.classList.add("visible");
        }
      });
    };

    // Throttle function to limit the number of scroll event calls
    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    // Combine all scroll handlers with throttling
    const handleScroll = throttle(() => {
      requestAnimationFrame(() => {
        handleParallax();
        handleScrollReveal();
        handleScrollTrigger();
      });
    }, 16); // Approximately 60fps

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
};
