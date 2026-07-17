"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BrainCircuit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
export default function Navbar() {
  // Change this later to your auth state
const { data, isPending } = useSession();
const router = useRouter();

const isLoggedIn = !!data?.user;

const handleLogout = async () => {
  await signOut();

  router.push("/");
  router.refresh();
};

  const [isOpen, setIsOpen] = useState(false);

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const privateLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "AI Chat", href: "/dashboard/ai-chat" },
    { name: "Generator", href: "/dashboard/ai-generator" },
    { name: "Manage Items", href: "/dashboard/manage-items" },
    { name: "Analytics", href: "/dashboard/analytics" },
  ];

  const navLinks = isLoggedIn ? privateLinks : publicLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-2 text-white">
            <BrainCircuit size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              AI Knowledge Hub
            </h1>
            <p className="-mt-1 text-xs text-gray-500">
              Intelligent Workspace
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {isPending ? null : isLoggedIn ? (
            <>
              <div className="flex items-center gap-3">
  <img
    src={data?.user?.image || "/avatar.png"}
    alt={data?.user?.name || "User"}
    className="h-10 w-10 rounded-full border object-cover"
  />

  <button
    onClick={handleLogout}
    className="rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-50"
  >
    Logout
  </button>
</div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-lg  bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
              >
                Register
              </Link>

            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-2 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4">
          {isPending ? null : isLoggedIn ? (
                <div className="flex items-center gap-3">
  <img
    src={data?.user?.image || "/avatar.png"}
    alt={data?.user?.name || "User"}
    className="h-10 w-10 rounded-full border object-cover"
  />

  <button
    onClick={handleLogout}
    className="rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-50"
  >
    Logout
  </button>
</div>
              ) : (
                <div className="space-y-3">
                  <Link
                    href="/login"
                    className="block rounded-lg border border-blue-600 py-2 text-center font-medium text-blue-600"
                  >
                    Login
                  </Link>

                 <Link
                href="/register"
                className="rounded-lg  bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
              >
                Register
              </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}