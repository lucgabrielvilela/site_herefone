import { Earbud } from "../data/earbuds";
import { EarbudCard } from "./EarbudCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface EarbudRowProps {
  title: string;
  earbuds: Earbud[];
  showPosition?: boolean;
}

export function EarbudRow({ title, earbuds, showPosition = false }: EarbudRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-gray-900 text-3xl font-bold mb-6 px-12">{title}</h2>
      <div className="relative group/row">
        <button 
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl text-gray-900 p-3 rounded-full opacity-0 group-hover/row:opacity-100 transition-all border border-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-12 scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {earbuds.map((earbud, index) => (
            <EarbudCard 
              key={earbud.id} 
              earbud={earbud} 
              position={showPosition ? index + 1 : undefined}
            />
          ))}
        </div>

        <button 
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl text-gray-900 p-3 rounded-full opacity-0 group-hover/row:opacity-100 transition-all border border-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}