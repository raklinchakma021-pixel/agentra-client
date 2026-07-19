import {
  Brain,
  Cpu,
  Code2,
  Bot,
  Sparkles,
  Image,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const categories = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
  },
  {
    name: "Machine Learning",
    icon: Cpu,
  },
  {
    name: "Prompt Engineering",
    icon: Sparkles,
  },
  {
    name: "AI Coding",
    icon: Code2,
  },
  {
    name: "Generative AI",
    icon: Bot,
  },
  {
    name: "AI Images",
    icon: Image,
  },
  {
    name: "Business AI",
    icon: Briefcase,
  },
  {
    name: "AI Productivity",
    icon: Lightbulb,
  },
];

export default function Categories() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="badge badge-primary badge-outline mb-4">
            Categories
          </span>

          <h2 className="text-4xl font-bold text-blue-600">
            Explore AI Topics
          </h2>

          <p className="mt-4 text-base-content/70">
            Browse our knowledge hub by category and discover articles,
            tutorials, tools, and resources tailored to your interests.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group cursor-pointer rounded-2xl border border-base-300 bg-base-100 p-8 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-primary transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="font-semibold">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}