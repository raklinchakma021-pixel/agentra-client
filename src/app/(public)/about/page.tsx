import {
  BrainCircuit,
  BookOpen,
  Target,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-base-100">
      {/* Hero */}
      <section className="hero min-h-[45vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="badge badge-primary badge-outline mb-4">
              About Us
            </div>

            <h1 className="text-5xl font-bold text-primary">
              Welcome to AI Knowledge Hub
            </h1>

            <p className="mt-6 text-lg text-base-content/70">
              AI Knowledge Hub is your trusted destination for learning,
              exploring, and staying updated with the latest advancements in
              Artificial Intelligence. Whether you're a beginner or an
              experienced developer, we provide high-quality resources to help
              you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Our Mission
              </h2>

              <p className="mb-5 text-base-content/70 leading-8">
                Our mission is to make AI education simple, accessible, and
                practical. We believe everyone should have access to reliable AI
                resources regardless of their experience level.
              </p>

              <p className="text-base-content/70 leading-8">
                From AI tools and tutorials to prompt engineering and industry
                news, we continuously update our platform with valuable content
                to help learners and professionals succeed.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card bg-base-200 shadow">
                <div className="card-body items-center text-center">
                  <BrainCircuit className="text-primary" size={40} />
                  <h3 className="font-bold text-xl">AI Learning</h3>
                  <p className="text-base-content/70">
                    Easy-to-understand AI guides and tutorials.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body items-center text-center">
                  <BookOpen className="text-primary" size={40} />
                  <h3 className="font-bold text-xl">Knowledge Base</h3>
                  <p className="text-base-content/70">
                    Curated articles and educational resources.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body items-center text-center">
                  <Target className="text-primary" size={40} />
                  <h3 className="font-bold text-xl">Focused Learning</h3>
                  <p className="text-base-content/70">
                    Learn practical AI skills with real-world examples.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body items-center text-center">
                  <ShieldCheck className="text-primary" size={40} />
                  <h3 className="font-bold text-xl">Trusted Content</h3>
                  <p className="text-base-content/70">
                    Carefully researched and regularly updated resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-base-200 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Sparkles
            className="mx-auto mb-4 text-primary"
            size={50}
          />

          <h2 className="text-4xl font-bold">
            Why Choose AI Knowledge Hub?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-bold">
                Updated Content
              </h3>

              <p className="text-base-content/70">
                Regularly updated articles covering the newest AI trends and
                technologies.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold">
                Beginner Friendly
              </h3>

              <p className="text-base-content/70">
                Learn AI step-by-step with simple explanations and practical
                examples.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold">
                Community Driven
              </h3>

              <p className="text-base-content/70">
                Built to help students, developers, creators, and AI
                enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}