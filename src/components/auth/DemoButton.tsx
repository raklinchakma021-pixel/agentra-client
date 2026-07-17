"use client";

interface DemoButtonProps {
  onDemoLogin: () => void;
}

export default function DemoButton({ onDemoLogin }: DemoButtonProps) {
  return (
    <button
      type="button"
      onClick={onDemoLogin}
      className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-900"
    >
      Demo Login
    </button>
  );
}