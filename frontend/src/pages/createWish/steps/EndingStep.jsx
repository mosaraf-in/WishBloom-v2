import { Heart } from "lucide-react";

export default function EndingStep({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Ending Section
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Add a beautiful ending to your wish.
        </p>
      </div>

      {/* Final Message */}
      <div className="mb-5">
        <label className="mb-2 block font-semibold text-slate-800">
          Final Message
        </label>

        <textarea
          rows={6}
          placeholder="Thank you for being such an important part of my life..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-pink-500"
        />
      </div>

      {/* Signature */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold text-slate-800">
          Signature
        </label>

        <input
          type="text"
          placeholder="With Love, Mosaraf ❤️"
          className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-pink-500"
        />
      </div>

      {/* Preview Box */}
      <div className="mb-8 rounded-3xl border border-pink-200 bg-pink-50 p-5">
        <div className="mb-3 flex items-center gap-2">
          <Heart
            size={18}
            className="fill-pink-500 text-pink-500"
          />

          <span className="font-semibold text-pink-700">
            Ending Preview
          </span>
        </div>

        <p className="text-slate-700">
          Thank you for being such an important part of my life...
        </p>

        <p className="mt-4 font-medium text-pink-600">
          With Love, Mosaraf ❤️
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
          className="flex-1 rounded-2xl border border-slate-300 py-4 font-semibold"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => setCurrentStep(currentStep + 1)}
          className="flex-1 rounded-2xl bg-pink-500 py-4 font-semibold text-white"
        >
          Continue
        </button>
      </div>

    </div>
  );
}