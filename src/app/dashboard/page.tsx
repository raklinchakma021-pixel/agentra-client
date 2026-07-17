"use client";

import { useSession } from "@/lib/auth-client";
import { User, Mail, ShieldCheck } from "lucide-react";

export default function Dashboard() {
  const { data, isPending } = useSession();

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-lg font-medium text-slate-600">
          Loading your dashboard...
        </div>
      </main>
    );
  }

  const user = data?.user;

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome back 👋
          </h1>
          <p className="mt-2 text-slate-600">
            Manage your AI workspace and account.
          </p>
        </div>

        {/* User Card */}
        <div className="rounded-2xl bg-white p-8 shadow-md border">
          <div className="flex items-center gap-5">
            <img
              src={user?.image || "https://ui-avatars.com/api/?name=User"}
              alt="Profile"
              className="h-24 w-24 rounded-full border object-cover"
            />

            <div>
              <h2 className="text-2xl font-bold">
                {user?.name || "Unknown User"}
              </h2>

              <p className="text-slate-500">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-5">
              <User className="mb-3 text-blue-600" size={28} />
              <p className="text-sm text-slate-500">Name</p>
              <h3 className="font-semibold">
                {user?.name || "N/A"}
              </h3>
            </div>

            <div className="rounded-xl border p-5">
              <Mail className="mb-3 text-green-600" size={28} />
              <p className="text-sm text-slate-500">Email</p>
              <h3 className="font-semibold break-all">
                {user?.email || "N/A"}
              </h3>
            </div>

            <div className="rounded-xl border p-5">
              <ShieldCheck className="mb-3 text-purple-600" size={28} />
              <p className="text-sm text-slate-500">Verified</p>
              <h3 className="font-semibold">
                {user?.emailVerified ? "Yes ✅" : "No ❌"}
              </h3>
            </div>
          </div>
        </div>

        {/* Session Data */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md border">
          <h2 className="mb-4 text-xl font-semibold">
            Session Data
          </h2>

          <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-green-400">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}