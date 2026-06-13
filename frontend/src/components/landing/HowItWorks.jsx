import { HOW_IT_WORKS } from "../../constants/landingData";
import { Wand2, Eye, Send, Image, Music, Type, Link2 } from "lucide-react";

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function HowItWorks() {
  const getConfig = (color) => {
    switch (color) {
      case "pink":
        return {
          badge: "bg-pink-500",
          icon: "text-pink-500",
          bg: "bg-pink-50",
          line: "bg-pink-500",
        };

      case "violet":
        return {
          badge: "bg-violet-500",
          icon: "text-violet-500",
          bg: "bg-violet-50",
          line: "bg-violet-500",
        };

      default:
        return {
          badge: "bg-emerald-500",
          icon: "text-emerald-500",
          bg: "bg-emerald-50",
          line: "bg-emerald-500",
        };
    }
  };

  return (
    <section id="how-it-works" className="scroll-mt-24 py-10 md:py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-30">
        {/* Badge */}

        <div className="flex justify-center">
          <div className="rounded-full border border-pink-100 bg-white px-4 py-1 shadow-sm md:px-8 md:py-3">
            <span className="text-xs font-semibold text-pink-500 md:text-base">
              💗 Simple 3 Steps
            </span>
          </div>
        </div>

        {/* Heading */}

        <div className="mt-4 text-center md:mt-6">
          <h3 className="text-4xl font-black md:text-6xl">
            <span className="text-slate-900">How It</span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Works
            </span>
          </h3>

          <p className="mx-auto mt-2 max-w-3xl text-base leading-6 text-slate-500 md:mt-3 md:text-xl md:leading-8">
            Create, preview and share your beautiful digital wishes in just 3
            simple steps.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-8 space-y-6 md:mt-16">
          {HOW_IT_WORKS.map((item, index) => {
            const style = getConfig(item.color);

            return (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8"
              >
                <div className="flex flex-col items-center gap-5 text-center md:gap-8 lg:flex-row lg:text-left">
                  {/* Step Number */}

                  <div
                    className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white md:left-6 md:top-6 md:h-10 md:w-10 md:text-lg ${style.badge}`}
                  >
                    {item.step}
                  </div>

                  {/* Main Icon */}

                  <div
                    className={`mt-1 flex h-17 w-17 md:h-20 md:w-20 items-center justify-center rounded-[2rem] ${style.bg} md:h-24 md:w-24`}
                  >
                    {index === 0 && (
                      <Wand2
                        className={`h-8 w-8 md:h-10 md:w-10 ${style.icon}`}
                      />
                    )}

                    {index === 1 && (
                      <Eye
                        className={`h-8 w-8 md:h-10 md:w-10 ${style.icon}`}
                      />
                    )}

                    {index === 2 && (
                      <Send
                        className={`h-8 w-8 md:h-10 md:w-10 ${style.icon}`}
                      />
                    )}
                  </div>

                  {/* Content */}

                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-slate-900 md:text-3xl">
                      {item.title}
                    </h4>

                    <div
                      className={`mx-auto mt-3 h-1 w-16 rounded-full lg:mx-0 ${style.line}`}
                    />

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-lg md:leading-8 lg:mx-0">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Side */}

                  <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:justify-start">
                    {index === 0 && (
                      <>
                        <div className="rounded-2xl bg-pink-50 p-3 transition hover:scale-110 md:p-4">
                          <Image className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />
                        </div>

                        <div className="rounded-2xl bg-pink-50 p-3 transition hover:scale-110 md:p-4">
                          <Music className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />
                        </div>

                        <div className="rounded-2xl bg-pink-50 p-3 transition hover:scale-110 md:p-4">
                          <Type className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <div className="rounded-full bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-500 shadow-sm md:px-8 md:py-4 md:text-base">
                        ● Live Preview
                      </div>
                    )}

                    {index === 2 && (
                      <>
                        <div className="rounded-2xl bg-emerald-50 p-3 transition hover:scale-110 md:p-4">
                          <FaWhatsapp className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
                        </div>

                        <div className="rounded-2xl bg-emerald-50 p-3 transition hover:scale-110 md:p-4">
                          <FaInstagram className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />
                        </div>

                        <div className="rounded-2xl bg-emerald-50 p-3 transition hover:scale-110 md:p-4">
                          <FaFacebookF className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
                        </div>

                        <div className="rounded-2xl bg-emerald-50 p-3 transition hover:scale-110 md:p-4">
                          <Link2 className="h-4 w-4 md:h-5 md:w-5 text-emerald-500" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
