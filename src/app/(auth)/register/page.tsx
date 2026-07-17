"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await authClient.signUp.email({
      name,
      email,
      password,
    });

    console.log(result);

    if (result.data) {
      alert("Registration successful!");
      // Later you can redirect:
      // router.push("/dashboard");
    }

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account 🚀
          </h1>

          <p className="mt-2 text-gray-500">
            Create your AI workspace account.
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
              <User className="h-5 w-5 text-gray-400" />

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
              <Mail className="h-5 w-5 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}