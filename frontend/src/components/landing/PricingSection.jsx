import { useState } from "react";
import {
  Check,
  Gift,
  Crown,
  ShieldCheck,
  RefreshCcw,
  BadgeCheck,
} from "lucide-react";
import ComingSoonModel from "../common/ComingSoonModel";

export default function PricingSection() {
  const [pack, setPack] = useState("mini");
  const [openModal, setOpenModal] = useState(false);

  const premiumData = {
    mini: {
      price: 20,
      wishes: 3,
    },

    memory: {
      price: 50,
      wishes: 10,
    },
  };

  const current = premiumData[pack];
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-8 md:py-12 py-6">
        {/* Badge */}

        <div className="flex justify-center">
          <div className="rounded-full border border-pink-100 bg-white px-4 md:px-8 py-1 text-xs md:text-base md:py-3 shadow-sm">
            <span className="font-semibold text-pink-500">
              💗 Simple Pricing
            </span>
          </div>
        </div>

        {/* Heading */}

        <div className="mx-auto mt-4 md:mt-6 max-w-3xl text-center">
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 ">
            Affordable
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Pricing
            </span>
          </h3>

          <p className="mt-3 text-base md:text-xl leading-8 text-slate-500">
            Choose the plan that fits your needs.
          </p>
        </div>
        {/* Pricing Grid */}

        <div className="grid mt-12 md:mt-14 gap-12  lg:grid-cols-2">
          {/* FREE */}

          <div className="relative rounded-[2rem] border border-pink-100 bg-white p-4 md:p-6 shadow-sm">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-13 w-13 md:h-17 md:w-17 items-center justify-center rounded-full bg-pink-50 shadow-sm">
                <Gift className="h-7 w-7 md:h-8 md:w-8 text-pink-500" />
              </div>
            </div>

            <div className="pt-6 md:pt-7 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-pink-500">
                Free
              </h3>

              <p className="mt-1 md:mt-2 text-slate-500">
                Perfect for getting started
              </p>

              <h4 className="mt-3 md:mt-4 text-4xl md:text-5xl font-black text-slate-900">
                ₹0
              </h4>

              <p className="mt-1 md:mt-2 text-slate-500">/ forever</p>

              <div className="my-4 md:my-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-pink-100" />
                <span className="text-pink-500">♡</span>
                <div className="h-px flex-1 bg-pink-100" />
              </div>

              <div className="grid grid-cols-2 text-sm md:text-base text-left gap-1 md:gap-0">
                {[
                  "1 Wish",
                  "Basic Themes",
                  "Add Photos",
                  "Basic Music",
                  "Email Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-pink-500" />

                    <span className="text-slate-700 text-xs md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="mt-10 md:mt-13 w-full rounded-full border-2 border-pink-300 py-2 md:py-3 font-bold text-pink-600 transition hover:bg-pink-50"
              >
                Get Started Free
              </button>
            </div>
          </div>

          {/* PREMIUM */}

          <div className="relative rounded-[2rem] border border-pink-100 bg-white p-4 md:p-6 shadow-sm">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-13 w-13 md:h-17 md:w-17 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg">
                <Crown className="h-7 w-7 md:h-8 md:w-8 text-yellow-300" />
              </div>
            </div>

            <div className="pt-6 md:pt-7 text-center">
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Premium
              </h3>

              <p className="mt-1 md:mt-2 text-slate-500">
                Unlock more wishes and create memories
              </p>

              <h4 className="mt-3 md:mt-4 text-4xl md:text-5xl font-black text-slate-900">
                ₹{current.price}
              </h4>

              <p className="mt-1 md:mt-2 text-slate-500">/ only</p>

              {/* TOGGLE */}

              <div className="mt-4 md:mt-6 flex rounded-full border border-pink-100 bg-slate-50 p-0.5">
                <button
                  onClick={() => setPack("mini")}
                  className={`flex-1 rounded-full py-1 font-semibold transition ${
                    pack === "mini"
                      ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white"
                      : "text-slate-600"
                  }`}
                >
                  Mini Pack
                </button>

                <button
                  onClick={() => setPack("memory")}
                  className={`flex-1 rounded-full py-1 font-semibold transition ${
                    pack === "memory"
                      ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white"
                      : "text-slate-600"
                  }`}
                >
                  Memory Pack
                </button>
              </div>

              {/* FEATURE BOX */}

              <div className="mt-4 borde ">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg md:text-xl font-black text-pink-500">
                    {current.wishes} Wishes
                  </h4>
                </div>

                <div className="grid mt-2 grid-cols-2 text-left gap-1 md:gap-0">
                  {[
                    "Premium Themes",
                    "Memories Support",
                    "Add Photos & Music",
                    "Priority Support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-pink-500" />

                      <span className="text-slate-700 text-xs md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="mt-7 md:mt-12 w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-500 py-3 md:py-4 font-bold text-white shadow-lg"
              >
                Choose This Pack
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-4 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-slate-600">
          <div className="flex items-center gap-1 md:gap-2">
            <ShieldCheck className="text-pink-500 h-4 w-4 md:h-5 md:w-5" />
            <span>Secure payments</span>
          </div>

          <span className="hidden md:block">•</span>

          <div className="flex items-center gap-2">
            <RefreshCcw className="text-pink-500 h-4 w-4 md:h-5 md:w-5" />
            <span>Cancel anytime</span>
          </div>

          <span className="hidden md:block">•</span>

          <div className="flex items-center gap-2">
            <BadgeCheck className="text-pink-500 h-4 w-4 md:h-5 md:w-5" />
            <span>100% Safe</span>
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
