interface Props {
  children: React.ReactNode;
}

export function SwipeContainer({ children }: Props) {
  return (
    <div className="
      flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth
      md:grid md:grid-cols-2 md:overflow-visible
    ">
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-full md:w-auto"
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
