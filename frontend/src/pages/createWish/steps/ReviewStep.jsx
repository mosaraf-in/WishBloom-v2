import { CheckCircle2 } from "lucide-react";

export default function ReviewStep({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Review & Publish
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Review everything before publishing your wish.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 rounded-3xl border border-slate-200 p-5">
        <h3 className="mb-4 text-lg font-semibold">
          Wish Summary
        </h3>

        <div className="space-y-4">

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Recipient
            </p>

            <p className="font-medium text-slate-900">
              Sarah Johnson
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Sender
            </p>

            <p className="font-medium text-slate-900">
              Mosaraf Hossain
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Theme
            </p>

            <p className="font-medium text-slate-900">
              Romantic Pink
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Font
            </p>

            <p className="font-medium text-slate-900">
              Default Font
            </p>
          </div>

        </div>
      </div>

      {/* Checklist */}
      <div className="mb-8 rounded-3xl border border-green-200 bg-green-50 p-5">
        <h3 className="mb-4 text-lg font-semibold text-green-700">
          Ready To Publish
        </h3>

        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span>Basic Details Completed</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span>Theme Selected</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span>Photos Added</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span>Music Selected</span>
          </div>

        </div>
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
          className="flex-1 rounded-2xl bg-pink-500 py-4 font-semibold text-white"
        >
          Publish Wish ✨
        </button>

      </div>

    </div>
  );
}