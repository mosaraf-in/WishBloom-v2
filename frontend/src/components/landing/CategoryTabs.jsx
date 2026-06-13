import { CATEGORIES } from "../../constants/landingData";

export default function CategoryTabs({ activeIndex, setActiveIndex }) {
  return (
    <div className="mt-3 md:mt-5 flex  flex-wrap gap-1 md:gap-3">
      {CATEGORIES.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-1 md:gap-2 text-sm md:text-base rounded-2xl border px-3 md:px-3 py-1.5 md:py-2 transition ${
              activeIndex === index
                ? "border-pink-500 bg-pink-50 text-pink-600"
                : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
