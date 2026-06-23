import { Video, PlayCircle } from "lucide-react";

export default function VideoStep({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Special Video
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Add a memorable video message.
        </p>
      </div>

      {/* Upload Video */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold text-slate-800">
          Upload Video
        </h3>

        <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 p-8 text-center">
          <Video
            size={38}
            className="mx-auto mb-3 text-pink-500"
          />

          <p className="font-medium text-slate-800">
            Upload MP4 Video
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Personal video message or memory
          </p>
        </div>
      </div>

      {/* Preview Area */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold text-slate-800">
          Video Preview
        </h3>

        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <div className="flex h-56 items-center justify-center bg-slate-100">
            <div className="text-center">
              <PlayCircle
                size={52}
                className="mx-auto mb-3 text-slate-400"
              />

              <p className="text-sm text-slate-500">
                Uploaded video preview
              </p>
            </div>
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
          onClick={() => setCurrentStep(currentStep + 1)}
          className="flex-1 rounded-2xl bg-pink-500 py-4 font-semibold text-white"
        >
          Continue
        </button>
      </div>

    </div>
  );
}