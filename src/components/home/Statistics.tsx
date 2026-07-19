import {
  BookOpen,
  BrainCircuit,
  Users,
  Globe,
} from "lucide-react";

const stats = [
  {
    number: "10K+",
    label: "Knowledge Articles",
    icon: BookOpen,
  },
  {
    number: "250+",
    label: "AI Tools",
    icon: BrainCircuit,
  },
  {
    number: "50K+",
    label: "Monthly Readers",
    icon: Users,
  },
  {
    number: "100+",
    label: "Countries Reached",
    icon: Globe,
  },
];

export default function Statistics() {
  return (
    <section className="bg-primary py-20 text-primary-content">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="text-center text-blue-700"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-300">
                  <Icon size={36} />
                </div>

                <h2 className="text-5xl font-bold">
                  {stat.number}
                </h2>

                <p className="mt-3 opacity-80">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}