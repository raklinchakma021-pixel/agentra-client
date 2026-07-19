const faqs = [
  {
    question: "What is the AI Knowledge Hub?",
    answer:
      "AI Knowledge Hub is a learning platform that provides AI articles, tutorials, prompt engineering guides, AI tool reviews, and curated learning resources for beginners and professionals.",
  },
  {
    question: "Is the platform free to use?",
    answer:
      "Yes. Most articles and learning resources are freely available. Some premium content and advanced resources may be added in the future.",
  },
  {
    question: "How often is new content published?",
    answer:
      "We regularly publish new AI articles, tutorials, and tool reviews to keep our readers updated with the latest advancements in artificial intelligence.",
  },
  {
    question: "Which AI tools are covered?",
    answer:
      "We cover popular AI tools including ChatGPT, Claude, Gemini, Midjourney, GitHub Copilot, Perplexity AI, Cursor, and many more.",
  },
  {
    question: "Can beginners learn from this platform?",
    answer:
      "Absolutely. Our content is designed for everyone, from complete beginners to experienced developers and AI enthusiasts.",
  },
  {
    question: "Can I contribute articles or tutorials?",
    answer:
      "Yes. We plan to support community contributions where experts and learners can share AI tutorials, guides, and useful resources.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="badge badge-primary badge-outline mb-4">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-blue-700">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base-content/70">
            Find answers to the most common questions about our AI Knowledge
            Hub.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus rounded-2xl border border-base-300 bg-base-100"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p className="leading-7 text-base-content/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}