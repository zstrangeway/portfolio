import { useEffect, useState } from "react";

function useNavItemActive(sectionId: string): boolean {
  if (typeof window === "undefined") return; // Prevents "document is not defined" error
  const target = document.getElementById(sectionId);
  const [isActive, setIsActive] = useState(false);

  const options = {
    rootMargin: "-50%", // intersects with middle of window
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsActive(entry.isIntersecting);
    }, options);
    observer.observe(target);
    return () => {
      observer.unobserve(target); // Cleanup
    };
  }, []);

  return isActive;
}

export default useNavItemActive;
