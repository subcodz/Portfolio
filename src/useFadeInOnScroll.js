import { useEffect, useRef } from "react";

export default function useFadeInOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Set initial hidden state
    node.classList.add("fade-in-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            node.classList.add("fade-in-visible");
          });
          observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}
