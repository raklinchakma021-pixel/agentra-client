"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/lib/auth-client";

export default function GoogleButton() {
  return (
    <button
      onClick={() =>
        signIn.social({
          provider: "google",
          callbackURL: "/dashboard",
        })
      }
      className="w-full rounded-lg border p-3 flex items-center justify-center gap-3"
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>
  );
}