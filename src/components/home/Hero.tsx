"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Sparkles,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles className="mr-2 h-4 w-4" />
            Powered by Agentic AI
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Your Intelligent
            <span className="block text-blue-600">
              AI Knowledge Hub
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Organize your knowledge, chat with AI, generate professional
            content, analyze data, and boost productivity—all from one
            intelligent platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
            >
              Explore Features
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">120K+</h3>
              <p className="text-gray-500">Documents</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">95%</h3>
              <p className="text-gray-500">AI Accuracy</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">40K+</h3>
              <p className="text-gray-500">Users</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative"
        >
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-600 p-3 text-white">
                  <BrainCircuit />
                </div>

                <div>
                  <h3 className="font-bold">AI Workspace</h3>
                  <p className="text-sm text-gray-500">
                    Agent Dashboard
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                Online
              </span>
            </div>

            {/* Chat */}
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="rounded-2xl bg-blue-600 px-4 py-3 text-white">
                  Summarize my research paper
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-cyan-500 p-2 text-white">
                  <Bot size={18} />
                </div>

                <div className="rounded-2xl bg-gray-100 px-4 py-3 text-gray-700">
                  Sure! I've analyzed your document and generated a concise summary with key insights.
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-4">
                <BrainCircuit className="mb-2 text-blue-600" />
                <h4 className="font-semibold">AI Chat</h4>
                <p className="text-sm text-gray-500">
                  Context-aware conversations
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-50 p-4">
                <BarChart3 className="mb-2 text-cyan-600" />
                <h4 className="font-semibold">Analytics</h4>
                <p className="text-sm text-gray-500">
                  AI-powered insights
                </p>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -right-6 top-8 rounded-2xl bg-white p-4 shadow-xl"
          >
            🤖 AI Assistant Active
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}