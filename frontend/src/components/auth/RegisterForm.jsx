import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

import GoogleButton from "./GoogleButton";
import { registerUser } from "../../api/authService";



export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const data = await registerUser(formData);
      console.log(data);

      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <div className="p-1 lg:rounded-l-[28px] lg:border lg:border-pink-100 lg:border-e-0 lg:bg-white lg:p-8 lg:shadow-lg ">
      {/* Desktop Back Button */}
      <div className="mb-7 hidden lg:flex">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 transition-all duration-300 hover:text-pink-500"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Desktop Heading */}
      <div className="hidden -mt-6 lg:block">
        <h2 className="text-center text-3xl font-black text-slate-900">
          Create your account
        </h2>

        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </div>

      {/* Form */}
      <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-3 lg:mt-8">
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {/* Name */}
        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="
              w-full rounded-xl border border-slate-200
              bg-white py-3 pl-11 pr-4
              outline-none transition
              focus:border-pink-400
              focus:ring-2 focus:ring-pink-100
            "
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="
              w-full rounded-xl border border-slate-200
              bg-white py-3 pl-11 pr-4
              outline-none transition
              focus:border-pink-400
              focus:ring-2 focus:ring-pink-100
            "
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="
              w-full rounded-xl border border-slate-200
              bg-white py-3 pl-11 pr-12
              outline-none transition
              focus:border-pink-400
              focus:ring-2 focus:ring-pink-100
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="
              w-full rounded-xl border border-slate-200
              bg-white py-3 pl-11 pr-12
              outline-none transition
              focus:border-pink-400
              focus:ring-2 focus:ring-pink-100
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showConfirmPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="
            w-full rounded-xl
            bg-gradient-to-r from-pink-500 to-violet-500
            py-3 font-semibold text-white
            shadow-lg transition-all
            hover:scale-[1.02]
          "
        >
          {loading ? "Creating...":"Create Account"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm text-slate-400">
          or continue with
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Google */}
      <GoogleButton />

      {/* Login */}
      <p className="mt-4 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-pink-500 hover:text-violet-500"
        >
          Login
        </Link>
      </p>
    </div>
  );
}