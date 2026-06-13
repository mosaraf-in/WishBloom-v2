import { Play } from "lucide-react";
import { useEffect,useRef } from "react";
export default function VideoSection({ thumbnail, setIsVideoPlaying }) {
  const videoRef = useRef(null)

  useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {

      if (entry.isIntersecting) {

        // Section visible
        if (video.dataset.wasPlaying === "true") {
          video.play().catch(() => {});
        }

      } else {

        // Section hidden
        if (!video.paused) {
          video.dataset.wasPlaying = "true";
          video.pause();
        } else {
          video.dataset.wasPlaying = "false";
        }

      }
    },
    {
      threshold: 0.7,
    }
  );

  observer.observe(video);

  return () => observer.disconnect();
}, []);

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            A Special Video For You
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-[1px] w-10 bg-pink-300" />
            <span className="text-pink-500">🎥</span>
            <div className="h-[1px] w-10 bg-pink-300" />
          </div>
        </div>

        {/* Video Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="relative">
            <video
              ref={videoRef}
              controls
              onPlay={()=> setIsVideoPlaying(true)}
              onPause={()=> setIsVideoPlaying(false)}
              onEnded={()=> setIsVideoPlaying(false)}
              className="h-64 w-full object-cover"
            ><source
              src="https://res.cloudinary.com/dd9nqpima/video/upload/v1781380899/birthday-video_msraic.mp4"
              type="video/mp4"
              />
              </video>

            
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Watch This Memory
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              A special video message prepared just for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}