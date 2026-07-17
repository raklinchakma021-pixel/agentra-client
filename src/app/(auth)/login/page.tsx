"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import GoogleButton from "@/components/auth/GoogleButton";
import DemoButton from "@/components/auth/DemoButton";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const loadingToast = toast.loading("Signing in...");

  try {
    const result = await authClient.signIn.email({
      email,
      password,
    });

    console.log(result);

    if (result.error) {
      toast.dismiss(loadingToast);
      toast.error(result.error.message || "Invalid email or password.");
      return;
    }

    toast.dismiss(loadingToast);
    toast.success("Login successful!");

    router.push("/dashboard");
  } catch (error) {
    console.error(error);

    toast.dismiss(loadingToast);
    toast.error("Something went wrong. Please try again.");
  }
};
const handleDemoLogin = () => {
  setEmail("jibon22@gmail.com");
  setPassword("jibon22@gmail.coM");
};
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to access your AI workspace.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
              <Mail className="h-5 w-5 text-gray-400" />

              <input
                type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
        
            </div>

            {/* Validation Error */}
            <p className="mt-1 text-sm text-red-500 hidden">
              Please enter a valid email.
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
              <Lock className="h-5 w-5 text-gray-400" />

              <input
                  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>

            <p className="mt-1 text-sm text-red-500 hidden">
              Password is required.
            </p>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Google Login */}
        <GoogleButton />

        {/* Demo Login */}
        <div className="mt-4">
     <DemoButton onDemoLogin={handleDemoLogin} />
        </div>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}