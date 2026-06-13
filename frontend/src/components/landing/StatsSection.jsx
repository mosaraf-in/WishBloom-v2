import { STATS } from "../../constants/landingData";

const colors = [
  {
    iconBg: "bg-gradient-to-br from-violet-50 to-violet-200",
    iconText: "text-violet-600",
    number: "text-violet-600",
  },
  {
    iconBg: "bg-gradient-to-br from-pink-50 to-pink-200",
    iconText: "text-pink-500",
    number: "text-pink-500",
  },
  {
    iconBg: "bg-gradient-to-br from-amber-50 to-amber-200",
    iconText: "text-amber-500",
    number: "text-amber-500",
  },
  {
    iconBg: "bg-gradient-to-br from-emerald-50 to-emerald-200",
    iconText: "text-emerald-500",
    number: "text-emerald-500",
  },
];

export default function StatsSection() {
  return (
    <section id="impact" className="scroll-mt-24 py-4 md:py-10 mt-10">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="relative rounded-[2.5rem] py-12 border border-slate-100 bg-white shadow-xl ">
          {/* Our Impact */}

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 md:px-6 rounded-2xl">
            <span className="text-sm md:text-base font-semibold text-pink-500">
              ✦ Our Impact ✦
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4">
            {STATS.map((item, index) => {
              const Icon = item.icon;
              const color = colors[index];

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 md:gap-6 p-4 md:p-8 ${
                    index !== STATS.length - 1
                      ? "lg:border-r lg:border-slate-200"
                      : ""
                  }`}
                >
                  {/* Icon */}

                  <div
                    className={`
                      relative flex h-12 w-12 md:h-17 md:w-17 shrink-0 items-center justify-center
                      rounded-full
                      ${color.iconBg}
                      border border-white/80
                      shadow-[0_12px_25px_rgba(0,0,0,0.08),inset_0_2px_8px_rgba(255,255,255,0.9)]
                    `}
                  >
                    {/* Glass Highlight */}
                    <div className="absolute inset-1 rounded-full bg-white/25" />

                    <Icon
                      className={`relative z-10 h-6 w-6 md:h-9 md:w-9 ${color.iconText}`}
                      strokeWidth={2.3}
                    />
                  </div>

                  {/* Text */}

                  <div>
                    <h3
                      className={`text-2xl md:text-4xl font-black ${color.number}`}
                    >
                      {item.value}
                    </h3>

                    <p className=" md:mt-2 text-xs md:text-lg font-medium text-slate-800">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
