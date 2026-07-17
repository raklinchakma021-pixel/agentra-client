import Link from "next/link";
import {
  BrainCircuit,
  GitBranch,
 
} from "lucide-react";
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-2 text-white">
                <BrainCircuit />
              </div>

              <h2 className="text-xl font-bold text-white">
                AI Knowledge Hub
              </h2>
            </div>

            <p className="leading-7 text-gray-400">
              Organize knowledge, collaborate with AI,
              generate professional content, and unlock
              powerful insights from your data.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/">Documentation</Link></li>
              <li><Link href="/">Support</Link></li>
              <li><Link href="/">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-4 text-gray-400">
              Stay updated with new AI features and product releases.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="mb-3 w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-gray-500">
              © 2026 AI Knowledge Hub. All rights reserved.
            </p>

            <div className="flex gap-5">
              <FaGithub  className="cursor-pointer hover:text-white" />
              <FaLinkedin  className="cursor-pointer hover:text-white" />
              <FaXTwitter  className="cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}