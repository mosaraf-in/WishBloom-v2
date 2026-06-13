// import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import giftBox from "../../assets/gift-box.png";
import { useState } from "react";
import ComingSoonModel from "../common/ComingSoonModel";

export default function CTASection() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 shadow-2xl">
          {/* Curve Background Shape */}
          <div className="absolute bottom-0 left-0 w-[55%] opacity-[0.10]">
            <svg
              viewBox="0 0 600 400"
              className="h-[180px] w-full sm:h-[220px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,130 C180,120 380,220 600,400 L600,400 L0,400 Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Decorative dots */}
          <div className="absolute right-4 top-6 grid grid-cols-5 gap-2 opacity-40 sm:right-10 sm:top-8 sm:gap-3">
            {[...Array(25)].map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
            ))}
          </div>

          {/* Floating hearts - Desktop only */}
          <div className="absolute right-40 top-24 hidden text-6xl opacity-20 lg:block">
            ❤️
          </div>

          <div className="absolute right-16 bottom-20 hidden text-5xl opacity-20 lg:block">
            💖
          </div>

          <div className="absolute right-32 bottom-10 hidden text-4xl opacity-20 lg:block">
            💕
          </div>

          <div className="absolute left-10 bottom-10 hidden text-4xl opacity-20 lg:block">
            💗
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center px-5 py-12 sm:px-8 lg:flex-row lg:px-16 lg:py-7">
            {/* Left Gift Image */}
            <div className="hidden items-center justify-center lg:flex lg:w-[30%]">
              <img
                src={giftBox}
                alt="Gift"
                className="mx-auto w-80 object-contain drop-shadow-2xl lg:w-96 xl:w-[420px]"
              />
            </div>

            {/* Center Content */}
            <div className="text-center lg:w-[56%]">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to surprise someone special?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
                Create a beautiful wish that will be remembered forever.
              </p>

              <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center">
                <button
                  onClick={() => setOpenModal(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-bold text-pink-600 shadow-xl transition duration-300 hover:scale-105 sm:w-auto sm:text-lg"
                >
                  Create Your First Wish
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => setOpenModal(true)}
                  className="w-full rounded-2xl border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:text-lg"
                >
                  Explore Wishes
                </button>
              </div>
            </div>

            {/* Right Spacer */}
            <div className="hidden lg:block lg:w-1/4" />
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
