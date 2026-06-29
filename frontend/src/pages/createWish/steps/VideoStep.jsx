import {
  Video,
  PlayCircle,
  Upload,
  PlaySquare,
  LayoutTemplate,
} from "lucide-react";
import { useState, useRef } from "react";
import { videoTemplates } from "../../../constants/videoTemplates";

export default function VideoStep({ currentStep, setCurrentStep }) {
  const [videoSource, setVideoSource] = useState(null);

  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");

  const [videoDuration, setVideoDuration] = useState(0);
  const [thumbnail, setThumbnail] = useState("");

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [youtubeThumbnail, setYoutubeThumbnail] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [templateView, setTemplateView] = useState("list");

  const thumbnailUploadRef = useRef(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setVideoFile(file);
    setVideoPreview(preview);

    const video = document.createElement("video");

    video.src = preview;
    video.crossOrigin = "anonymous";

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 1;
    });
    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      setThumbnail(canvas.toDataURL("image/jpeg"));
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setThumbnail(preview);
  };

  const handleYoutubeVideo = () => {
    const match = youtubeUrl.match(
      /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/,
    );

    if (!match) return;

    const videoId = match[1];

    setYoutubeVideoId(videoId);

    setYoutubeThumbnail(
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    );
  };

  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Special Video</h2>

        <p className="mt-2 text-sm text-slate-500">
          Add a memorable video message.
        </p>
      </div>

      {!videoSource && (
        <div className="space-y-4 mb-8">
          <button
            type="button"
            onClick={() => setVideoSource("upload")}
            className="w-full rounded-3xl border border-pink-200 bg-white p-5 text-left shadow-sm transition hover:border-pink-400"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                <Upload className="text-pink-500" />
              </div>

              <div>
                <h3 className="font-semibold">Upload Video</h3>

                <p className="text-sm text-slate-500">
                  Upload your own MP4 video
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setVideoSource("youtube")}
            className="w-full rounded-3xl border border-pink-200 bg-white p-5 text-left shadow-sm transition hover:border-pink-400"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
                <PlaySquare className="text-red-500" />
              </div>

              <div>
                <h3 className="font-semibold">YouTube Link</h3>

                <p className="text-sm text-slate-500">
                  Paste a YouTube video URL
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setVideoSource("template")}
            className="w-full rounded-3xl border border-pink-200 bg-white p-5 text-left shadow-sm transition hover:border-pink-400"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                <LayoutTemplate className="text-purple-500" />
              </div>

              <div>
                <h3 className="font-semibold">Use Template</h3>

                <p className="text-sm text-slate-500">
                  Choose from WishBloom templates
                </p>
              </div>
            </div>
          </button>
        </div>
      )}

      {videoSource === "upload" && (
        <div className="space-y-5">
          <button
            type="button"
            onClick={() => setVideoSource(null)}
            className="flex items-center gap-2 text-pink-500 font-medium"
          >
            ← Back
          </button>

          <div>
            <h3 className="text-xl font-bold">Upload Video</h3>

            <p className="text-sm text-slate-500 mt-1">
              Upload your personal video message
            </p>
          </div>

          {!videoPreview ? (
            <label className="block cursor-pointer">
              <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50 p-8 text-center">
                <Video size={42} className="mx-auto mb-4 text-pink-500" />

                <h4 className="font-semibold">No Video Selected</h4>

                <p className="mt-2 text-sm text-slate-500">Choose MP4 Video</p>

                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                />
              </div>
            </label>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Video Preview</h4>
              </div>

              <video
                src={videoPreview}
                controls
                onLoadedMetadata={(e) =>
                  setVideoDuration(Math.floor(e.target.duration))
                }
                className="w-full rounded-3xl"
              />
              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
                <h4 className="font-semibold">Video Information</h4>

                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>File Name</span>
                    <span>{videoFile?.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>{formatTime(videoDuration)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Size</span>
                    <span>
                      {videoFile
                        ? `${(videoFile.size / 1024 / 1024).toFixed(2)} MB`
                        : "-"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-white p-4">
                <input
                  ref={thumbnailUploadRef}
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  className="hidden"
                />

                <h4 className="font-semibold">Video Thumbnail</h4>

                <p className="mt-1 text-sm text-slate-500">
                  Thumbnail for public wish page
                </p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt="Video Thumbnail"
                      className="h-40 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-40 items-center justify-center bg-slate-100">
                      <Video size={42} className="text-slate-400" />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => thumbnailUploadRef.current?.click()}
                  className="mt-4 rounded-xl border border-pink-300 px-4 py-2 text-sm text-pink-600"
                >
                  Change Thumbnail
                </button>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-white p-4">
                <h4 className="font-semibold">Video Message</h4>

                <p className="mt-1 text-sm text-slate-500">
                  Optional message below your video
                </p>

                <textarea
                  rows={4}
                  placeholder="Write something special..."
                  className="mt-4 w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-pink-400"
                />
              </div>

              <div className="flex gap-3">
                <label className="flex-1 cursor-pointer rounded-2xl border border-pink-300 py-3 text-center text-pink-600">
                  Replace Video
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setVideoFile(null);
                    setVideoPreview("");
                  }}
                  className="flex-1 rounded-2xl border border-red-300 py-3 text-red-500"
                >
                  Delete Video
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {videoSource === "youtube" && (
        <div className="space-y-5">
          <button
            type="button"
            onClick={() => setVideoSource(null)}
            className="font-medium text-pink-500"
          >
            ← Back
          </button>

          <div>
            <h3 className="text-xl font-bold">YouTube Link</h3>

            <p className="mt-1 text-sm text-slate-500">
              Paste a YouTube video URL
            </p>
          </div>

          <input
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className="w-full rounded-2xl border p-4"
          />

          <button
            type="button"
            onClick={handleYoutubeVideo}
            className="rounded-2xl bg-pink-500 px-5 py-3 text-white"
          >
            Load Video
          </button>

          {youtubeThumbnail && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-pink-200 bg-white p-1">
                <h4 className="font-semibold text-center">Video Preview</h4>

                <div className="mt-4 overflow-hidden rounded-2xl border">
                  {/* <img
          src={youtubeThumbnail}
          alt="YouTube Thumbnail"
          className="h-52 w-full object-cover"
        /> */}

                  {youtubeVideoId && (
                    <div className=" overflow-hidden rounded-2xl border-black border-2">
                      <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-white p-4">
                <h4 className="font-semibold">Video Message</h4>

                <p className="mt-1 text-sm text-slate-500">
                  Optional message below your video
                </p>

                <textarea
                  rows={4}
                  placeholder="Write something special..."
                  className="mt-4 w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-pink-400"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {videoSource === "template" && (
        <div className="space-y-5">
          <button
            type="button"
            onClick={() => setVideoSource(null)}
            className="font-medium text-pink-500"
          >
            ← Back
          </button>

          <div>
            <h3 className="text-xl font-bold">WishBloom Templates</h3>

            <p className="mt-1 text-sm text-slate-500">
              Choose a ready-made video template
            </p>
          </div>

          <div className="max-h-[550px] space-y-5 overflow-y-auto pr-1">
            {videoTemplates.map((template) => {
              const isSelected = selectedTemplate?.id === template.id;

              if (isSelected && templateView === "preview") {
                return (
                  <div
                    key={template.id}
                    className="overflow-hidden rounded-3xl border border-pink-300 bg-white shadow-sm"
                  >
                    <div className="p-4">
                      <div className="overflow-hidden rounded-2xl">
                        <iframe
                          className="aspect-video w-full"
                          src={template.video}
                          title={template.title}
                          allowFullScreen
                        />
                      </div>

                      <div className="mt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTemplate(null);
                            setTemplateView("list");
                          }}
                          className="rounded-xl border px-4 py-2"
                        >
                          Back
                        </button>

                        <button
                          type="button"
                          onClick={() => setTemplateView("message")}
                          className="rounded-xl bg-pink-500 px-4 py-2 text-white"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              if (isSelected && templateView === "message") {
                return (
                  <div
                    key={template.id}
                    className="overflow-hidden rounded-3xl border border-pink-300 bg-white shadow-sm"
                  >
                    <div className="p-4">
                      <h4 className="font-semibold">Video Message</h4>

                      <textarea
                        rows={5}
                        placeholder="Write something special..."
                        className="mt-4 w-full rounded-2xl border p-4"
                      />

                      <div className="mt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setTemplateView("preview")}
                          className="rounded-xl border px-4 py-2"
                        >
                          Back
                        </button>

                        <button
                          type="button"
                          className="rounded-xl bg-pink-500 px-4 py-2 text-white"
                        >
                          Use Template
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => {
                    setSelectedTemplate(template);
                    setTemplateView("preview");
                  }}
                  className={`w-full overflow-hidden rounded-3xl border bg-white text-left transition shadow-sm ${
                    selectedTemplate?.id === template.id
                      ? "border-pink-500 ring-2 ring-pink-200"
                      : "border-slate-200"
                  }`}
                >
                  <img
                    src={template.thumbnail}
                    alt={template.title}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-4">
                    <div className="mb-2 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
                      {template.category}
                    </div>

                    <h4 className="text-lg font-semibold text-slate-900">
                      {template.title}
                    </h4>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        Ready-made Template
                      </span>

                      <div className="rounded-full bg-pink-500 px-4 py-2 text-sm font-medium text-white">
                        Preview
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
