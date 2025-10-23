
"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // ⬅️ Importante para detectar mudança de rota

interface ScrollFocusProps {
  children: React.ReactNode;
  offset?: number;
  duration?: number;
  scrollMargin?: number;
}

export default function ScrollFocus({
  children,
  offset = 0.2,
  duration = 1500,
  scrollMargin = 100,
}: ScrollFocusProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);
  const rafRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname(); // ⬅️ Atualiza sempre que muda de página


useEffect(() => {
  const element = sectionRef.current;
  if (!element) return;

  let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  let userIsScrolling = false;

  const onScroll = () => {
    userIsScrolling = true;
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      userIsScrolling = false;
    }, 100); // Aguarda 100ms para considerar que o scroll parou
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // 🔁 Desconecta qualquer observer anterior
  if (observerRef.current) observerRef.current.disconnect();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= offset &&
          !userIsScrolling
        ) {
          if (!isAnimating.current) {
            smoothScrollToElement(element);
          }
        }
      });
    },
    { threshold: offset }
  );

  observer.observe(element);
  observerRef.current = observer;

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onScroll);
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    if (scrollTimeout) clearTimeout(scrollTimeout);
  };
}, [pathname, offset, duration, scrollMargin]);

  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const smoothScrollToElement = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const absoluteTop = window.scrollY + rect.top;
    const absoluteBottom = absoluteTop + rect.height;
    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = Math.max(0, docHeight - viewportHeight);

    const minTarget = absoluteBottom - viewportHeight + scrollMargin;
    const maxTarget = absoluteTop - scrollMargin;

    let targetY: number;
    if (minTarget <= maxTarget) {
      if (window.scrollY < minTarget) targetY = minTarget;
      else if (window.scrollY > maxTarget) targetY = maxTarget;
      else return;
    } else {
      targetY = maxTarget;
    }

    targetY = clamp(targetY, 0, maxScroll);

    if (Math.abs(targetY - window.scrollY) < 2) return;

    isAnimating.current = true;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        isAnimating.current = false;
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  return <div ref={sectionRef}>{children}</div>;
}



