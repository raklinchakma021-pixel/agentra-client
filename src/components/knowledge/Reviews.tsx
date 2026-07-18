import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    comment:
      "Excellent explanation with practical examples.",
  },
  {
    name: "Sarah Smith",
    comment:
      "Perfect article for beginners getting started with AI.",
  },
  {
    name: "Alex Johnson",
    comment:
      "Clear, informative, and easy to follow.",
  },
];

export default function Reviews() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Reviews
      </h2>

      <div className="space-y-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-xl border p-5"
          >
            <div className="mb-2 flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <h3 className="font-semibold">
              {review.name}
            </h3>

            <p className="mt-2 text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}