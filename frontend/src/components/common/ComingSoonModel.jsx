import { X, Heart } from "lucide-react";

export default function ComingSoonModal({
  isOpen,
  onClose,
  title = "Coming Soon!",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 transition hover:text-slate-700"
        >
          <X size={28} />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-100">
            <Heart size={40} className="fill-pink-500 text-pink-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-3xl font-black bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Content */}
        <p className="mt-4 text-center text-slate-600 leading-7">
          Developers are working on it.
          <br />
          This feature will be available very soon.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
          Got It
        </button>
      </div>
    </div>
  );
}
