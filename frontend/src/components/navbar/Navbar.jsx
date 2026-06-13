import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import ProfileDropdown from "../common/ProfileDropdown";
import ComingSoonModel from "../common/ComingSoonModel";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div>
      <header className="fixed w-full top-0 z-65 border-b border-black/5 bg-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2  md:px-9 md:py-4 ">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="/favicon.png"
              alt="WishBloom"
              className="h-8 w-8 md:h-10 md:-w-10 object-contain"
            />

            <h1 className="text-2xl md:text-3xl font-black">
              <span className="text-pink-600">Wish</span>
              <span className="text-violet-700">Bloom</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}

          <DesktopNav scrollToSection={scrollToSection}/>

          {/* Desktop */}

          <div className="hidden items-center gap-6 md:flex">
            {!isLoggedIn && (
              <button
                onClick={() => setOpenModal(true)}
                className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-2 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02]"
              >
                Create Wish
              </button>
            )}

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-white">
                    {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <span className="max-w-[120px] truncate font-medium text-slate-700">
                    {user?.full_name?.split(" ")[0]}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${profileOpen? "rotate-180":""}`}
                    />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-12">
                    <ProfileDropdown
                        handleLogout={handleLogout}
                        onClose={() => setProfileOpen(false)}
                    />
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="font-medium text-slate-700 transition hover:text-pink-600"
              >
                Log in
              </Link>
            )}
          </div>

          {/* Mobile Right */}

          <div className="flex items-center gap-2 md:hidden">
            {isLoggedIn ? (
              <button onClick={() => setProfileOpen(!profileOpen)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-sm font-bold text-white">
                  {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-semibold text-slate-700"
              >
                Log in
              </Link>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => setOpen(!open)}
                className="flex h-11 w-11 items-center justify-center shadow-lg shadow-pink-100/50"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>

          {isLoggedIn && profileOpen && (
           <div className="absolute right-2 top-12 z-[80] md:hidden">
            <ProfileDropdown
                isMobile={true}
                handleLogout={handleLogout}
                onClose={() => setProfileOpen(false)}
            />

           </div>
          )}
        </div>
      </header>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/20 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}

      <MobileDrawer
        open={open}
        scrollToSection={scrollToSection}
        setOpenModal={setOpenModal}
      />
      <ComingSoonModel
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Coming Soon!"
      />
    </div>
  )
}