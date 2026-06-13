import {  ArrowUp } from "lucide-react";
import { useState } from "react";
import ComingSoonModel from "../common/ComingSoonModel";

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);

  const scrollToHome = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="border-t border-pink-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Brand */}

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
             <img
            src="/favicon.png"
            alt="WishBloom"
            className="h-8 w-8 md:h-10 md:-w-10 object-contain" />

            <span className="text-3xl font-black text-slate-900">
              WishBloom
            </span>
          </div>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 md:text-base">
            Create beautiful wishes that bring smiles and memories.
          </p>
        </div>

        {/* Links */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600 md:text-base">
          <a href="#how-it-works" className="transition hover:text-pink-500">
            How It Works
          </a>

          <span className="text-pink-300">•</span>

          <a href="#pricing" className="transition hover:text-pink-500">
            Pricing
          </a>

          <span className="text-pink-300">•</span>

          <a href="#" className="transition hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Divider */}

        <div className="mt-8 border-t border-pink-100" />

        {/* Bottom */}

        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <button
            onClick={() => setOpenModal(true)}
            onClick={scrollToHome}
            className="flex items-center gap-2 rounded-full border border-pink-200 px-4 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
          >
            <ArrowUp size={16} />
            Back to Home
          </button>

          <div className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} WishBloom
          </div>
        </div>
      </div>
      <ComingSoonModel
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Coming Soon!"
      />
    </footer>
  );
}
