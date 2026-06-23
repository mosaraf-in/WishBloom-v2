import { useEffect, useState } from "react";
import { Heart, ShieldCheck, Play } from "lucide-react";
import { HERO_SLIDES } from "../../constants/landingData";
import CategoryTabs from "./CategoryTabs";
import ComingSoonModel from "../common/ComingSoonModel";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) =>
        prev === HERO_SLIDES.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeIndex];

  return (
    <section id="hero" className="scroll-mt-24 py-4 relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="max-w-xl text-4xl md:text-6xl font-black leading-tight text-slate-950 md:text-6xl">
            Create Beautiful
            <br />
            Wishes That
            <br />
            <span className="text-pink-500">Touch Hearts</span>
            <span className="ml-2 inline-flex">💞</span>
          </h1>

          <ul className="mt-7 space-y-1 text-base md:text-lg text-slate-700">
            <li className="flex items-start gap-3">
              <Heart className="mt-1 h-3.5 w-3.5 md:h-5 md:w-5 fill-pink-500 text-pink-500" />
              Make every occasion unforgettable.
            </li>

            <li className="flex items-start gap-3">
              <Heart className="mt-1 h-4 w-4 md:h-5 md:w-5 fill-pink-500 text-pink-500" />
              Add your message, photos, music and memories.
            </li>
          </ul>

          <div className="mt-7 flex gap-3 sm:flex-row">
            <Link
              to="/create-wish"
              className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-2 md:px-7 md:py-3 text-center text-lg font-semibold text-white shadow-xl shadow-pink-500/30 transition hover:scale-[1.02]"
            >
              Get Started
            </Link>

            <Link
              to="/wish"
              className="rounded-2xl border border-pink-200 bg-white px-6 py-2 md:px-7 md:py-3 text-center text-lg font-semibold text-slate-700 shadow-lg transition hover:border-pink-300 hover:bg-pink-50 hover:scale-[1.02]"
            >
              See Demo
            </Link>
          </div>

          <div className="mt-4 text-base md:text-lg flex items-center gap-3 text-slate-600">
            <ShieldCheck className="h-5 w-5" />
            <span>No sign up required to preview</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* Preview Card */}

          <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-2xl shadow-pink-100">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              {/* Image */}

              <div className="h-[260px] md:h-[420px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}

              <div className="flex h-[300px] md:h-[420px] flex-col justify-between p-4 md:p-6">
                <div>
                  <h3 className="text-center text-2xl md:text-3xl font-bold text-pink-500">
                    {slide.title}
                  </h3>

                  <div className="mx-auto mt-2 md:mt-4 h-[2px] w-24 bg-pink-200" />

                  <p className="mt-4 md:mt-6 text-center text-base md:text-lg leading-6 md:leading-8 text-slate-700 ">
                    {slide.message}
                  </p>

                  <p className="mt-5 md:mb-8 text-center text-lg md:text-xl font-medium text-pink-500">
                    Love You Always 💗
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-3 md:p-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-pink-500 text-white">
                      <Play className="h-4 w-4 md:h-5 md:w-5 fill-white" />
                    </div>

                    <div>
                      <p className="font-semibold">Perfect</p>

                      <p className="text-xs md:text-sm text-slate-500">
                        Ed Sheeran
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 md:mt-4 h-1 rounded-full bg-pink-100">
                    <div className="h-full w-2/3 rounded-full bg-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex justify-center ">
            <CategoryTabs
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </div>
      <ComingSoonModel
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Coming Soon!"
      />
    </section>
  );
}
