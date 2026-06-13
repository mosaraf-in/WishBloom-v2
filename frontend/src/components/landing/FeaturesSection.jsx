import { useState } from "react";
import { Check } from "lucide-react";
import { FEATURES } from "../../constants/landingData";

export default function FeaturesSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="features" className="scroll-mt-24 py-4 md:py-8">
      <div className="mx-auto max-w-7xl px-3 md:px-10">
        {/* Badge */}

        <div className="flex justify-center">
          <div className="rounded-full border border-pink-100 bg-white px-4 py-1 md:px-8 md:py-3 text-xs md:text-base shadow-sm">
            <span className="font-semibold text-pink-500">
              💗 Powerful Features
            </span>
          </div>
        </div>

        {/* Heading */}

        <div className="mx-auto mt-4 md:mt-6 max-w-3xl text-center">
          <h3 className=" font-black text-slate-900 text-4xl md:text-6xl">
            Why Choose
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              WishBloom
            </span>
          </h3>

          <p className="mt-3 text-base md:text-xl leading-6 md:leading-8 text-slate-500">
            Everything you need to create meaningful digital wishes that touch
            hearts.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-6 md:mt-10 grid gap-1 md:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={feature.title}
                className="group h-[240px] md:h-[400px] rounded-[2rem] border border-pink-100 bg-white p-3 md:p-8 shadow-[0_10px_40px_rgba(236,72,153,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
              >
                <div className="flex h-full flex-col justify-between">
                  {!isActive ? (
                    <>
                      <div>
                        {/* Icon */}

                        <div className="mx-auto flex h-15 w-15 md:h-25 md:w-25 items-center justify-center rounded-full bg-gradient-to-br from-pink-50 to-violet-50 shadow-inner">
                          <Icon className="h-8 w-8 md:h-14 md:w-14 text-pink-500" />
                        </div>

                        {/* Title */}

                        <h3 className="mt-4 md:mt-5 text-center text-base md:text-2xl font-black text-slate-900">
                          {feature.title}
                        </h3>

                        <div className="mx-auto mt-1 md:mt-2 h-[3px] md:h-1 w-10 md:w-16 rounded-full bg-gradient-to-r from-pink-400 to-violet-400" />

                        {/* Description */}

                        <p className="mt-4 md:mt-5 text-center text-xs md:text-base leading-4 md:leading-8 text-slate-500">
                          {feature.description}
                        </p>
                      </div>

                      {/* View Details */}

                      <button
                        onClick={() => setActiveCard(index)}
                        className="
                          mx-auto
                          rounded-full
                          bg-gradient-to-r
                          from-pink-500
                          to-violet-500
                          px-3 py-1.5
                          md:px-5 md:py-2
                          text-[10px]
                          md:text-sm
                          font-semibold
                          text-white
                          shadow-lg
                          shadow-pink-200/50
                          transition-all
                          duration-300
                          hover:scale-105
                        "
                      >
                        View Details
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mt-8 md:mt-6">
                        <h3 className="text-center text-base md:text-2xl font-black text-slate-900">
                          {feature.title}
                        </h3>

                        <div className="mx-auto mt-1 md:mt-3 h-[3px] h-1 w-10 md:w-16 rounded-full bg-gradient-to-r from-pink-400 to-violet-400" />

                        <div className="mt-4 md:mt-8 space-y-1 md:space-y-4">
                          {feature.details.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 md:gap-2 rounded-2xl md:px-4"
                            >
                              <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-500" />
                              <span className="text-xs md:text-sm font-medium text-slate-700">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveCard(null)}
                        className="
                          mx-auto
                          rounded-full
                          border
                          border-pink-200
                          bg-pink-50
                          px-3 py-1.5
                          md:px-5 md:py-2
                          text-[10px]
                          md:text-sm
                          font-semibold
                          text-pink-600
                          transition-all
                          duration-300
                          hover:bg-pink-100
                        "
                      >
                        Back
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
