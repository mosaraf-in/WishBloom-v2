import MusicLibrary from "../../../components/createMedia/MusicLibrary";
import VoiceMessage from "../../../components/createMedia/VoiceMessage";


export default function MusicStep({ wishData, setWishData }) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm">
      <MusicLibrary
       wishData={wishData}
       setWishData={setWishData}
      />
      <VoiceMessage wishData={wishData} setWishData={setWishData} />
    </div>
  );
}
