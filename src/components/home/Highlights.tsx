import { ArrowRight, Clock, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Most Popular Articles",
    description:
      "Discover the AI articles our readers love the most.",
    icon: TrendingUp,
    badge: "Popular",
  },
  {
    title: "Editor's Picks",
    description:
      "Hand-picked resources recommended by our experts.",
    icon: Star,
    badge: "Featured",
  },
  {
    title: "Latest Updates",
    description:
      "Stay informed with the newest AI news and tutorials.",
    icon: Clock,
    badge: "New",
  },
];

export default function Highlights() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="badge badge-primary badge-outline mb-4">
            Highlights
          </span>

          <h2 className="text-4xl font-bold text-blue-700">
            Featured Content
          </h2>

          <p className="mt-4 text-base-content/70">
            Explore the most valuable resources from our AI Knowledge Hub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-base-100 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-xl bg-cyan-300 p-4 text-primary">
                    <Icon size={28} />
                  </div>

                  <span className="badge badge-primary">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-6 text-base-content/70">
                  {item.description}
                </p>

                <Link
                  href="/knowledge"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}