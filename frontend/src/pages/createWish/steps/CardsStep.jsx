import { Plus, MessageSquare } from "lucide-react";

export default function CardsStep({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Message Cards
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Add extra surprise messages and memories.
        </p>
      </div>

      {/* Add Card Button */}
      <div className="mb-6">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-pink-200 bg-pink-50 py-5 text-pink-600"
        >
          <Plus size={20} />

          Add New Card
        </button>
      </div>

      {/* Card 1 */}
      <div className="mb-4 rounded-3xl border border-slate-200 p-4">
        <div className="mb-3 flex items-center gap-2">
          <MessageSquare
            size={18}
            className="text-pink-500"
          />

          <span className="font-semibold">
            Card 1
          </span>
        </div>

        <input
          type="text"
          placeholder="Card Title"
          className="mb-3 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
        />

        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
        />
      </div>

      {/* Card 2 */}
      <div className="mb-8 rounded-3xl border border-slate-200 p-4">
        <div className="mb-3 flex items-center gap-2">
          <MessageSquare
            size={18}
            className="text-pink-500"
          />

          <span className="font-semibold">
            Card 2
          </span>
        </div>

        <input
          type="text"
          placeholder="Card Title"
          className="mb-3 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
        />

        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
        />
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