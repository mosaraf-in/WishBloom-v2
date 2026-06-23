import { Heart, ChevronDown } from "lucide-react";
import { TbMusic,TbMusicOff } from "react-icons/tb";
import { animateScroll, scroller } from "react-scroll"
import { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CoverSection({ wishData, isVideoPlaying }) {


  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if(audioRef.current){
      audioRef.current.volume = 0.2;
    }
  },[])

  useEffect(() => {
    if(!audioRef.current) return;
    
    if(isVideoPlaying){
      audioRef.current.pause();
      setIsPlaying(false);

    }else{
      if(audioRef.current.currentTime > 0){
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  },[isVideoPlaying])



  const handleOpenSurprise = () =>{

    if(!isVideoPlaying){
      audioRef.current?.play();
      setIsPlaying(true)
    }
    

    scroller.scrollTo("message-section",{
      duration:30000,
      delay:0,
      smooth: "easeInOut",
      offset: -20,
    })
  }

  const toggleMusic = ()=>{
    if(isVideoPlaying) return;
    if(!audioRef.current) return;

    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(false)
    }else{
      audioRef.current.play();
      setIsPlaying(true);
    }
  }



  return (<>
  
    <audio
      ref={audioRef}
      src="https://res.cloudinary.com/dd9nqpima/video/upload/v1781380880/birthday_uk51l5.mp3"
      loop
      volume={0.2}
    />
    <section className="relative h-[93vh] overflow-hidden">
      {/* Background */}
      <img
        src={wishData.coverImage}
        alt={wishData.recipientName}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/75" />

      <Link  // make button
      to="/"
  // onClick={() => navigate(-1)} when button made
  className="
    absolute
    top-4
    left-4
    z-50
    rounded-full
    bg-white/20
    backdrop-blur-md
    px-3
    py-2
    text-white
  "
>
  <BiArrowBack size={22}/>
</Link>
      {/* Music Button */}
      <button onClick={toggleMusic} className="absolute right-5 top-5 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-2 text-white backdrop-blur-md">
        {isPlaying?(
          <TbMusic size={18}/>
        ):(
          <TbMusicOff size={18} />
        )}
        
      </button>

      {/* Content */}
      <div className="mt-6 relative z-20 flex h-full flex-col px-4 pt-10">

        {/* Title */}
        <div>
          <h2 className="text-4xl font-light text-pink-300">
            Happy
          </h2>

          <h1 className="text-6xl font-bold leading-none text-white">
            Birthday,
          </h1>


          <h3 className="mt-2 text-5xl italic  font-['Great_Vibes'] text-3xl drop-shadow-lg text-pink-300">
            {wishData.recipientName}
          </h3>
        </div>

        {/* Middle Area */}
        <div className="-mt-23 flex flex-1 items-center gap-3">

          {/* Message */}
          <div className="flex w-[35%] justify-center text-white flex-col">
            <p className="text-sm text-center leading-9">
              A little surprise
              <br />
              from the heart
              <br />
              to make
              <br />
               your day 
              <br />
              extra special.
            </p>

            <Heart
              size={20}
              className="mt-2 ml-10  fill-pink-400 text-pink-400"
            />
          </div>

          {/* Photo Card */}
          <div className="relative w-[65%]">

           <div className="absolute inset-0 scale-110 rounded-[40px] bg-pink-500/20 blur-3xl"/>
             <div className="overflow-hidden rounded-[40px] border border-white/30 bg-white/10 shadow-[0_20px_60px_rgba(255,255,255,0.25)] backdrop-blur-sm">

              <img
                src={wishData.recipientPhoto}
                alt={wishData.recipientName}
                className="h-[330px] w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
           

            {/* Floating Button */}
            <div className="absolute -bottom-4 left-[20%] z-30 -translate-x-1/2">

              {/* Left Line */}
              <div className="absolute left-[-80px] top-1/2 h-[1px] w-14 -translate-y-1/2 bg-white/50" />

              {/* Right Line */}
              <div className="absolute right-[-80px] top-1/2 h-[1px] w-14 -translate-y-1/2 bg-white/50" />

              <button
                onClick={handleOpenSurprise}
                className="
                whitespace-nowrap
                rounded-full
                bg-pink-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_40px_rgba(236,72,153,0.2)]
                "
              >
                Open Your Surprise
              </button>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="pb-8 flex justify-center">
          <ChevronDown
            size={34}
            className="animate-bounce text-white"
          />
        </div>

      </div>
    </section>
  </>
  )
}