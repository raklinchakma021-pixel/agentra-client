import {
  BrainCircuit,
  BookOpen,
  Sparkles,
  Search,
  Bot,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Articles",
    description:
      "Explore high-quality AI articles generated and curated to simplify complex topics.",
    icon: BrainCircuit,
  },
  {
    title: "Prompt Library",
    description:
      "Access a growing collection of prompts for ChatGPT, Gemini, Claude, and more.",
    icon: Sparkles,
  },
  {
    title: "Smart Search",
    description:
      "Quickly find AI tools, tutorials, and guides with an intelligent search experience.",
    icon: Search,
  },
  {
    title: "Learning Resources",
    description:
      "Discover beginner-friendly guides, roadmaps, and practical AI learning materials.",
    icon: BookOpen,
  },
  {
    title: "AI Tool Reviews",
    description:
      "Compare popular AI tools based on features, pricing, and real-world usability.",
    icon: Bot,
  },
  {
    title: "Trusted Content",
    description:
      "All resources are carefully reviewed to ensure quality and accuracy.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="badge badge-primary badge-outline mb-4">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-blue-700">
            Everything You Need to Learn AI
          </h2>

          <p className="mt-4 text-base-content/70">
            Our AI Knowledge Hub brings together tutorials, prompt libraries,
            tool reviews, and learning resources to help you stay ahead in the
            world of artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-base-300  p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                  <Icon size={32} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-base-content/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}