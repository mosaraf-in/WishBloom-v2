import { Mic, Upload, Pause, Play, Trash2 } from "lucide-react";

import { useState, useRef, useEffect } from "react";

export default function VoiceMessage({ wishData, setWishData }) {
  const [voiceMode, setVoiceMode] = useState("record");
  const [voiceSource, setVoiceSource] = useState(null);

  const [voiceCurrentTime, setVoiceCurrentTime] = useState(0);
  const [voiceDuration, setVoiceDuration] = useState(0);

  const [voiceFile, setVoiceFile] = useState(null);

  const [voicePreview, setVoicePreview] = useState("");

  const [voicePlaying, setVoicePlaying] = useState(false);

  const [isRecording, setIsRecording] = useState(false);

  const [recordTime, setRecordTime] = useState(0);

  const voiceAudioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const voiceUploadRef = useRef(null);

  useEffect(() => {
    let timer;

    if (isRecording) {
      timer = setInterval(() => {
        setRecordTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRecording]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleVoiceUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setVoiceFile(file);
    setVoicePreview(preview);
    setVoiceSource("upload");

    setWishData({
      ...wishData,
      voiceMessage: preview,
    });
  };

  const toggleVoicePreview = () => {
    if (!voiceAudioRef.current) return;

    if (voicePlaying) {
      voiceAudioRef.current.pause();
      setVoicePlaying(false);
    } else {
      voiceAudioRef.current.play();
      setVoicePlaying(true);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;

      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: "audio/webm",
        });

        const url = URL.createObjectURL(blob);

        setVoicePreview(url);

        setVoiceFile(blob);
        setVoiceSource("record");

        setWishData({
          ...wishData,
          voiceMessage: url,
          voiceDuration: formatTime(recordTime),
        });

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };

      recorder.start();

      setRecordTime(0);
      setIsRecording(true);
    } catch (error) {
      alert(`${error.name}\n${error.message}`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    setIsRecording(false);
  };

  const deleteVoice = () => {
    setVoicePreview("");
    setVoiceFile(null);

    setWishData({
      ...wishData,
      voiceMessage: "",
      voiceDuration: "",
    });
  };

  return (
    <>
      <input
        ref={voiceUploadRef}
        type="file"
        accept="audio/*"
        onChange={handleVoiceUpload}
        className="hidden"
      />

      <div className="mt-8">
        <h3 className="font-semibold">Voice Message</h3>

        <p className="text-gray-500">
          {voiceSource === "record" ? "Recorded Voice" : "Uploaded Voice"}
        </p>

        {!voicePreview ? (
          <div className="mt-4 rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50 p-6 text-center">
            <Mic size={42} className="mx-auto mb-4 text-pink-500" />
            <h4 className="font-semibold">No Voice Message</h4>

            <p className="mt-1 text-sm text-slate-500">
              Record or upload a personal voice message
            </p>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setVoiceMode("record")}
                className={`flex-1 rounded-xl py-3 ${
                  voiceMode === "record" ? "bg-pink-500 text-white" : "border"
                }`}
              >
                Record
              </button>

              <button
                type="button"
                onClick={() => setVoiceMode("upload")}
                className={`flex-1 rounded-xl py-3 ${
                  voiceMode === "upload" ? "bg-pink-500 text-white" : "border"
                }`}
              >
                Upload
              </button>
            </div>

            {voiceMode === "record" && (
              <button
                type="button"
                onClick={() =>
                  isRecording ? stopRecording() : startRecording()
                }
                className={`mt-5 flex h-20 w-20 items-center justify-center rounded-full mx-auto ${
                  isRecording ? "bg-red-500" : "bg-pink-500"
                } text-white`}
              >
                <Mic size={30} />
              </button>
            )}

            {voiceMode === "upload" && (
              <button
                type="button"
                onClick={() => voiceUploadRef.current?.click()}
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-pink-500 px-5 py-3 text-white"
              >
                <Upload size={18} />
                Upload Voice
              </button>
            )}

            {isRecording && (
              <p className="mt-4 text-lg font-bold text-pink-600">
                {formatTime(recordTime)}
              </p>
            )}
          </div>
        ) : (
          <div className="rounded-3xl border border-pink-200 bg-pink-50 p-5">
            <audio
              ref={voiceAudioRef}
              src={voicePreview}
              onTimeUpdate={(e) => setVoiceCurrentTime(e.target.currentTime)}
              onLoadedMetadata={(e) => setVoiceDuration(e.target.duration)}
              onEnded={() => {
                setVoiceCurrentTime(voiceDuration);
                setVoicePlaying(false);
              }}
            />
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Voice Message</h4>

                <p className="text-sm text-slate-500">
                  {wishData.voiceDuration || "Ready"}
                </p>
              </div>

              <button
                type="button"
                onClick={deleteVoice}
                className="text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={toggleVoicePreview}
              className="mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white"
            >
              {voicePlaying ? <Pause size={20} /> : <Mic size={20} />}
            </button>

            <p className="mt-3 text-sm text-slate-500">
              {formatTime(Math.floor(voiceCurrentTime))} /{" "}
              {formatTime(Math.floor(voiceDuration))}
            </p>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-pink-500 transition-all"
                style={{
                  width: `${
                    voiceDuration
                      ? Math.min((voiceCurrentTime / voiceDuration) * 100, 100)
                      : 0
                  }%`,
                }}
              />
            </div>

            {voiceSource === "record" ? (
              <button
                type="button"
                onClick={() => {
                  deleteVoice();
                  setVoiceMode("record");
                }}
                className="mt-5 rounded-xl border border-pink-300 px-4 py-2 text-sm text-pink-600"
              >
                <div className="flex gap-2">
                  <Mic size={16} />
                  Re-record
                </div>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => voiceUploadRef.current?.click()}
                className="mt-5 rounded-xl border border-pink-300 px-4 py-2 text-sm text-pink-600"
              >
                <div className="flex gap-2">
                  <Upload size={16} />
                  Replace File
                </div>
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
