import { gsap } from "gsap";
import { MutableRefObject, useEffect } from "react";

const useEnterTween = (
  ref: MutableRefObject<undefined>,
  durationDistance = 0.4
): void => {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      [ref.current],
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1 }
    );

    const updateProgress = () =>
      tl.progress(currentProgress(ref.current, durationDistance));

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0) {
        gsap.ticker.add(updateProgress);
      } else {
        gsap.ticker.remove(updateProgress);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);
};

const currentProgress = (
  element: HTMLElement,
  durationDistance: number
): number => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = scrollPosition - element.offsetTop;
  return elementPosition / (window.innerHeight * durationDistance);
};

export default useEnterTween;
