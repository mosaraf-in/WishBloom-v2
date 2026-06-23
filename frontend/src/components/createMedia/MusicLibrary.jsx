import { Music, Play, Pause, Upload, Trash2 } from "lucide-react";
import { useState, useRef } from "react";
import { musicLibrary } from "../../constants/musicLibrary";

export default function MusicLibrary({ wishData, setWishData }) {
  const [musicMode, setMusicMode] = useState("library");
  const [uploadType, setUploadType] = useState("mp3");

  const [selectedMusicId, setSelectedMusicId] = useState(null);
  const [playingId, setPlayingId] = useState(null);

  const [musicFile, setMusicFile] = useState(null);
  const [musicPreview, setMusicPreview] = useState("");

  const [musicPlaying, setMusicPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const libraryAudioRef = useRef(null);
  const musicAudioRef = useRef(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const selectLibraryMusic = (music) => {
    setSelectedMusicId(music.id);

    setWishData({
      ...wishData,
      musicSource: "library",
      musicTitle: music.title,
      musicArtist: music.artist,
      musicCover: music.cover,
      music: music.audio,
    });
  };

  const handleMusicUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    const audio = document.createElement("audio");

    audio.src = preview;

    audio.onloadedmetadata = () => {
      const duration = formatTime(Math.floor(audio.duration));

      setMusicFile(file);
      setMusicPreview(preview);

      setWishData({
        ...wishData,
        musicSource: "upload",
        music: preview,
        musicTitle: file.name,
        musicDuration: duration,
      });
    };
  };

  const toggleMusicPreview = () => {
    if (!musicAudioRef.current) return;

    if (musicPlaying) {
      musicAudioRef.current.pause();
    } else {
      musicAudioRef.current.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  const removeMusic = () => {
    setMusicPreview("");
    setMusicFile(null);

    setWishData({
      ...wishData,
      music: "",
      musicTitle: "",
    });
  };

  const musicList = musicLibrary || [];

  return (
    <>
      <audio ref={libraryAudioRef} onEnded={() => setPlayingId(null)} />

      <div>
        <div className="mb-6">
          <h2 className="text-xl font-bold">Background Music</h2>

          <p className="mt-1 text-sm text-slate-500">
            Select music for your wish page
          </p>
        </div>

        <div className="mb-5 grid grid-cols-2 rounded-2xl bg-pink-50 p-1">
          <button
            type="button"
            onClick={() => setMusicMode("library")}
            className={`rounded-xl py-3 text-sm font-semibold ${
              musicMode === "library"
                ? "bg-pink-500 text-white"
                : "text-slate-600"
            }`}
          >
            Music Library
          </button>

          <button
            type="button"
            onClick={() => setMusicMode("upload")}
            className={`rounded-xl py-3 text-sm font-semibold ${
              musicMode === "upload"
                ? "bg-pink-500 text-white"
                : "text-slate-600"
            }`}
          >
            Upload Music
          </button>
        </div>

        {/* Library */}
        {musicMode === "library" && (
          <div className="mb-8 max-h-[420px] space-y-3 overflow-y-auto pr-1">
            {musicList.map((music) => (
              <button
                key={music.id}
                type="button"
                onClick={() => selectLibraryMusic(music)}
                className={`
          w-full
          rounded-2xl
          border
          p-1
          text-left
          transition

          ${
            selectedMusicId === music.id
              ? "border-pink-500 bg-pink-50"
              : "border-slate-200 bg-white"
          }
        `}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={music.cover}
                    alt=""
                    className="h-12 w-12 rounded-xl object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="truncate text-sm font-semibold">
                      {music.title}
                    </h4>

                    <p className="truncate text-xs text-slate-500">
                      {music.artist} • {music.duration}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();

                      if (!libraryAudioRef.current) return;

                      if (playingId === music.id) {
                        libraryAudioRef.current.pause();
                        libraryAudioRef.current.currentTime = 0;
                        setPlayingId(null);
                        return;
                      }

                      libraryAudioRef.current.pause();
                      libraryAudioRef.current.currentTime = 0;

                      libraryAudioRef.current.src = music.audio;
                      libraryAudioRef.current.play();

                      setPlayingId(music.id);
                    }}
                    className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-pink-200
              bg-white
            "
                  >
                    {playingId === music.id ? (
                      <Pause size={16} />
                    ) : (
                      <Play size={16} />
                    )}
                  </button>
                </div>
              </button>
            ))}
          </div>
        )}
        {/* Upload Music */}
        {musicMode === "upload" && (
          <div className="mb-8">
            {!musicPreview ? (
              <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50 p-6 text-center">
                <Music size={40} className="mx-auto mb-4 text-pink-500" />

                <h3 className="font-semibold text-slate-800">
                  No Music Selected
                </h3>

                <p className="mt-1 text-sm text-slate-500">Upload MP3, MP4</p>

                <div className="mt-5 flex justify-center gap-2">
                  <button
                    onClick={() => setUploadType("mp3")}
                    className={`rounded-xl px-4 py-2 text-sm ${
                      uploadType === "mp3" ? "bg-pink-500 text-white" : "border"
                    }`}
                  >
                    MP3
                  </button>

                  <button
                    onClick={() => setUploadType("mp4")}
                    className={`rounded-xl px-4 py-2 text-sm ${
                      uploadType === "mp4" ? "bg-pink-500 text-white" : "border"
                    }`}
                  >
                    MP4
                  </button>
                </div>

                <label className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-pink-500 px-5 py-3 text-white">
                  <Upload size={18} />
                  Choose File
                  <input
                    type="file"
                    accept={uploadType === "mp3" ? "audio/*" : "video/*"}
                    onChange={handleMusicUpload}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="rounded-3xl border border-pink-200 bg-pink-50 p-5">
                <audio
                  ref={musicAudioRef}
                  src={musicPreview}
                  onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                  onLoadedMetadata={(e) => setDuration(e.target.duration)}
                />

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{wishData.musicTitle}</h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {formatTime(Math.floor(currentTime))} /{" "}
                      {formatTime(Math.floor(duration))}
                    </p>
                  </div>

                  <button onClick={removeMusic} className="text-red-500">
                    <Trash2 size={20} />
                  </button>
                </div>

                <button
                  onClick={toggleMusicPreview}
                  className="mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white"
                >
                  {musicPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                <div className="mt-4">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-pink-500 transition-all"
                      style={{
                        width: `${
                          duration
                            ? Math.min((currentTime / duration) * 100, 100)
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <label className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-pink-300 px-4 py-2 text-sm text-pink-600">
                  Replace File
                  <input
                    type="file"
                    accept="audio/*,video/*"
                    onChange={handleMusicUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
