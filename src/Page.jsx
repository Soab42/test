import { useEffect, useRef, useState } from "react";

export default function Page({ pageNo }) {
  const [isInterSecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //   console.log(entry);
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    //for first time animations
    // if you want to animate all times then remove this
    if (isInterSecting) {
      observer.unobserve(ref.current);
    }
    return () => observer.disconnect();
  }, [isInterSecting]);

  return (
    <div className={`page ${isInterSecting ? "slide-in" : ""}`} ref={ref}>
      Page {pageNo}
    </div>
  );
}
