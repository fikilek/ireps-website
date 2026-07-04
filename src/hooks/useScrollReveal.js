import { useEffect, useRef, useCallback } from "react";

/**
 * Triggers a CSS class when an element scrolls into view.
 * Default: adds "revealed" once with threshold 0.15.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">…
 *
 * Optional:
 *   useScrollReveal({ threshold: 0.3, rootMargin: "0px 0px -60px 0px", once: false })
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } =
    options;

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove("revealed");
        }
      });
    },
    [once],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect, threshold, rootMargin]);

  return ref;
}

export default useScrollReveal;
