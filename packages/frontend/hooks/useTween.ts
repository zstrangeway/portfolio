import { MutableRefObject, useEffect } from "react";
import { gsap } from "gsap";

const parallaxMultiplier = 40;

const useTween = (
  ref: MutableRefObject<undefined>,
  effect: "fadeIn" | "parallax",
  height = 0
): void => {
  useEffect(() => {
    if (!ref.current) return;

    let durationDistance, fromOptions, toOptions;
    const offset = parallaxMultiplier * height;

    switch (effect) {
      case "fadeIn":
        durationDistance = 0.4;
        fromOptions = { scale: 0.5, opacity: 0 };
        toOptions = { scale: 1, opacity: 1 };
        break;
      case "parallax":
        durationDistance = 1;
        fromOptions = { y: offset };
        toOptions = { y: -offset };
        break;
      default:
        break;
    }

    const tl = gsap.timeline({ paused: true });

    tl.fromTo([ref.current], fromOptions, toOptions);

    const updateProgress = () =>
      tl.progress(currentProgress(ref.current, durationDistance));

    gsap.ticker.add(updateProgress);

    // const observer = new IntersectionObserver(([entry]) => {
    //   if (entry.intersectionRatio > 0) {
    //     gsap.ticker.add(updateProgress);
    //   } else {
    //     gsap.ticker.remove(updateProgress);
    //   }
    // });
    // if (ref.current) {
    //   observer.observe(ref.current);
    // }
    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, [ref.current]);
};

const currentProgress = (
  element: HTMLElement,
  durationDistance: number
): number => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = scrollPosition - element.offsetTop;
  return elementPosition / (window.innerHeight * durationDistance);
};

export default useTween;
