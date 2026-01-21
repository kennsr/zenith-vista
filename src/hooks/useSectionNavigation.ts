import { useEffect, useCallback } from "react";

export const useSectionNavigation = () => {
  const scrollToSection = useCallback((direction: "up" | "down") => {
    // Get all sections with data-section attribute
    const sections = Array.from(document.querySelectorAll("[data-section]"));

    if (sections.length === 0) return;

    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.3; // 30% threshold for section detection

    let currentIndex = -1;

    // Find the current section based on scroll position
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const rect = section.getBoundingClientRect();

      // Section is considered "current" if its top is within the threshold from viewport top
      if (rect.top >= -threshold && rect.top < windowHeight - threshold) {
        currentIndex = i;
        break;
      }
    }

    // If no section found, find the closest one
    if (currentIndex === -1) {
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const rect = section.getBoundingClientRect();
        if (rect.bottom > 0) {
          currentIndex = i;
          break;
        }
      }
    }

    // Calculate next index
    let nextIndex: number;
    if (direction === "down") {
      nextIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      nextIndex = Math.max(currentIndex - 1, 0);
    }

    // Scroll to the next section
    const nextSection = sections[nextIndex] as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't hijack keyboard if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        scrollToSection("down");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSection("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollToSection]);

  return { scrollToSection };
};
