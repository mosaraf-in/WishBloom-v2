import logo from "../../assets/logo.png";
import { Heart, Music2, Sparkles, Send } from "lucide-react";
import authBg from "../../assets/auth-bg.png";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


export default function AuthLayout({
  title,
  highlight,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-violet-50">
      <div className="w-full bg-white px-4 py-6 lg:py-0 lg:px-0">

        <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-start gap-10  h-full  p-12 py-14 bg-cover -mr-12 z-10 bg-center relative overlflow-hidden " style={{ backgroundImage:`url(${authBg})` }} >

            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="WishBloom Logo" className="h-10 w-10 object-contain" />

                <h2 className="text-3xl font-black text-slate-900">
                  <span className="text-pink-600">Wish</span>
                  <span>Bloom</span>
                </h2>
              </div>

              <h1 className="mt-10 text-6xl font-black leading-tight text-slate-900">
                {title}{" "}
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  {highlight}
                </span>
              </h1>

              <p className="mt-3 max-w-md text-lg leading-8 text-slate-600">
                {subtitle}
              </p>
            </div>

            <div className=" space-y-4 text-slate-900">

              <div className="flex items-center gap-3">
                <Heart size={17} className="text-pink-500"/>
                <span>Create beautiful wishes</span>
              </div>

              <div className="flex items-center gap-3">
                <Music2 size={17} className="text-pink-500"/>
                <span>Upload photos & music</span>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles size={17} className="text-pink-500"/>
                <span>Personalize with themes</span>
              </div>

              <div className="flex items-center gap-3">
                <Send size={17} className="text-pink-500"/>
                <span>Share with your loved ones</span>
              </div>

            </div>
          </div>

          {/* Mobile + Right Side */}
          <div className="flex items-center  justify-center z-20">
            
            {/* Mobile Header */}
            <div className="w-full max-w-xl">
                <div className="mb-8 lg:hidden">
                    <Link
                        to="/"
                        className="
                        text-slate-600
                        transition-all duration-300
                        hover:text-pink-500
                        "
                    >
                        <BiArrowBack size={22} />
                    </Link>
                </div>


              <div className="mb-8 -mt-8 text-center lg:hidden">


                <div className="mb-4 flex gap-2 justify-center">
                    <img src={logo} alt="WishBloom Logo" className="h-7 w-7 object-contain" />
                    <h2 className="text-lg mt-0.3 font-bold text-slate-900">
                    WishBloom
                    </h2>
                </div>


                <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                  {title}{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xs text-slate-600">
                  {subtitle}
                </p>
              </div>

              {children}

            </div>

          </div>

        </div>

      </div>
    </div>
  );

}