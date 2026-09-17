import { useRef } from "react";
import { EarbudCard } from "./EarbudCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EarbudRow({ title, earbuds, showPosition = false }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-5">
      <h2 className="h4 fw-bold text-dark mb-4 px-4">{title}</h2>
      <div className="position-relative hf-row-container">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="btn btn-white shadow border hf-scroll-btn hf-scroll-btn--left"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="d-flex gap-4 px-4 pb-2 hf-scrollable-row"
          style={{ overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {earbuds.map((earbud, index) => (
            <EarbudCard
              key={earbud.id}
              earbud={earbud}
              position={showPosition ? index + 1 : undefined}
            />
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="btn btn-white shadow border hf-scroll-btn hf-scroll-btn--right"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
