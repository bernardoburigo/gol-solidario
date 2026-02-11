import { useRef, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export function SwipeContainer({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const childrenArray = Array.isArray(children)
    ? children
    : [children];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () =>
      container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Container principal */}
      <div
        ref={containerRef}
        className="
          flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth
          md:grid md:grid-cols-2 md:overflow-visible
        "
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full md:w-auto"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Indicador (mobile apenas) */}
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {childrenArray.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-green-900 w-4"
                : "bg-green-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
