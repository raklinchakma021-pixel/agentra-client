import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "AI Enthusiast",
    message:
      "This platform helped me understand prompt engineering and AI tools much faster than traditional courses.",
  },
  {
    name: "Michael Lee",
    role: "Software Developer",
    message:
      "The tutorials are practical, easy to follow, and always up to date. Highly recommended!",
  },
  {
    name: "Emily Carter",
    role: "Content Creator",
    message:
      "I visit this AI Knowledge Hub every week to discover new tools and improve my workflow.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="badge badge-primary badge-outline mb-4">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-blue-700">
            What Our Readers Say
          </h2>

          <p className="mt-4 text-base-content/70">
            Trusted by AI learners, developers, and professionals worldwide.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-base-300 bg-base-100 p-8 shadow-md transition hover:shadow-xl"
            >
              <div className="mb-4 flex text-warning">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mb-6 italic text-base-content/70">
                "{item.message}"
              </p>

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-base-content/60">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}