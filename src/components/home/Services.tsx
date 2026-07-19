import {
  Brain,
  Bot,
  BookOpen,
  Newspaper,
  GraduationCap,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "AI Learning Guides",
    description:
      "Step-by-step tutorials and roadmaps to master artificial intelligence concepts.",
    icon: GraduationCap,
  },
  {
    title: "Prompt Engineering",
    description:
      "Learn how to write effective prompts for ChatGPT, Claude, Gemini, and more.",
    icon: Brain,
  },
  {
    title: "AI Tool Reviews",
    description:
      "Discover unbiased reviews and comparisons of the latest AI tools.",
    icon: Wrench,
  },
  {
    title: "AI News & Trends",
    description:
      "Stay updated with the newest breakthroughs and innovations in AI.",
    icon: Newspaper,
  },
  {
    title: "Knowledge Articles",
    description:
      "Read in-depth articles covering AI concepts, workflows, and best practices.",
    icon: BookOpen,
  },
  {
    title: "AI Assistants",
    description:
      "Explore popular AI assistants and learn how to use them effectively.",
    icon: Bot,
  },
];

export default function Services() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="badge badge-primary badge-outline mb-4">
            Our Services
          </span>

          <h2 className="text-4xl font-bold text-blue-700">
            Helping You Learn and Build with AI
          </h2>

          <p className="mt-4 text-base-content/70">
            From tutorials and prompt engineering to AI tool reviews, we provide
            everything you need to grow your AI knowledge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-base-100 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500 text-primary-content">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-base-content/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}