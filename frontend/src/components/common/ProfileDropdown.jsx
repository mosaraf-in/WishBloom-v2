import { Link } from "react-router-dom";
import { Sparkles, Gift, User, LogOut } from "lucide-react";

export default function ProfileDropdown({
  isMobile = false,
  handleLogout,
}) {
  return (
    <div
      className={`overflow-hidden border border-slate-100 bg-white shadow-2xl ${
        isMobile
          ? "w-[220px] rounded-[28px]"
          : "w-52 rounded-2xl"
      }`}
    >
      <Link
        to="/create-wish"
        className="flex items-center gap-4 px-5 py-4 hover:bg-pink-50"
      >
        <Sparkles className="h-5 w-5 text-purple-500" />
        Create Wish
      </Link>

      <Link
        to="/my-wishes"
        className="flex items-center gap-4 px-5 py-4 hover:bg-pink-50"
      >
        <Gift className="h-5 w-5" />
        My Wishes
      </Link>

      <Link
        to="/profile"
        className="flex items-center gap-4 px-5 py-4 hover:bg-pink-50"
      >
        <User className="h-5 w-5" />
        My Profile
      </Link>

      <div className="mx-5 h-px bg-slate-200" />

      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-4 px-5 py-4 text-red-500 hover:bg-red-50"
      >
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </div>
  );
}