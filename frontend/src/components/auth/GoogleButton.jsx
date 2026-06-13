import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom"

export default function GoogleButton() {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithGoogle();

    console.log("Name:", result.user.displayName);
    console.log("Email:", result.user.email);

    navigate("/");
  } catch (error) {
    console.error(error);
  }
};


  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="
        flex w-full items-center justify-center gap-3
        rounded-xl border border-slate-200
        bg-white py-3
        text-sm font-medium text-slate-700
        transition-all duration-300
        hover:border-pink-200
        hover:shadow-md
      "
    >
      <FcGoogle size={22} />
      Continue with Google
    </button>
  );
}