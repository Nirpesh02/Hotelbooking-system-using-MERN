import React, { useState } from "react";
import {
  Mail,
  Lock,
  Loader,
  Facebook,
  Chrome,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { isValidEmail } from "../utils/helpers";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


export const Login = ({ onNavigate }) => {
  const { login, loginWithSocial } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("⚠️ Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("⚠️ Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
      onNavigate("home");
    } catch (error) {
      console.error('Login error:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          setError("❌ No account found with this email address");
          break;
        case 'auth/wrong-password':
          setError("❌ Incorrect password");
          break;
        case 'auth/invalid-email':
          setError("❌ Invalid email address");
          break;
        case 'auth/user-disabled':
          setError("❌ This account has been disabled");
          break;
        case 'auth/too-many-requests':
          setError("❌ Too many failed attempts. Try again later");
          break;
        default:
          setError("❌ Login failed. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  // Social Login
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError("");

    try {
      await loginWithSocial(provider);
      onNavigate("home");
    } catch (error) {
      console.error('Social login error:', error);
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setError("❌ Sign-in was cancelled");
          break;
        case 'auth/popup-blocked':
          setError("❌ Pop-up was blocked by browser");
          break;
        case 'auth/account-exists-with-different-credential':
          setError("❌ Account exists with different sign-in method");
          break;
        default:
          setError("❌ Google sign-in failed. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

return (
  <div
    className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url(https://www.orchidhotel.com/static/website/img/hotels/panchgani/homepage_slider/homepage_slider.webp)",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Card */}
    <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30">
        
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
            HotelNepal 🏨
          </h1>
          <p className="text-white/80 mt-2">
            Login & book your dream stay ✨
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-700 px-4 py-3 rounded-xl text-sm shadow">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-white/70" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-pink-300 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-white/70" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-purple-300 outline-none"
              />

              {/* Toggle Eye */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/70 hover:text-white"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-white/80">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="rounded"
              />
              <span>Remember me</span>
            </label>

            <button className="hover:text-white font-semibold">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 shadow-lg transition flex justify-center items-center"
          >
            {loading ? (
              <>
                <Loader className="h-5 w-5 animate-spin mr-2" />
                Logging in...
              </>
            ) : (
              "Login 🚀"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-white/30" />
          <span className="px-3 text-white/70 text-sm">
            Or continue with
          </span>
          <div className="flex-grow border-t border-white/30" />
        </div>

        {/* Social Login Buttons */}
<div className="grid grid-cols-2 gap-4">

  {/* Google */}
  <button
    onClick={() => handleSocialLogin("google")}
    disabled={loading}
    className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-white text-gray-700 font-semibold hover:scale-105 transition shadow-md"
  >
    <FcGoogle size={22} />
    <span>Google</span>
  </button>

  
    </div>

        {/* Signup */}
        <div className="mt-8 text-center text-white/80">
          Don’t have an account?{" "}
          <button
            onClick={() => onNavigate("register")}
            className="font-bold text-white hover:underline"
          >
            Sign up ✨
          </button>
        </div>
      </div>
    </div>
  );
};
