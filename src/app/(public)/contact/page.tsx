import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-base-100">
      {/* Hero */}
      <section className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content text-center">
          <div>
            <div className="badge badge-primary badge-outline mb-4">
              Contact Us
            </div>

            <h1 className="text-5xl font-bold text-primary">
              We'd Love to Hear From You
            </h1>

            <p className="mt-5 text-base-content/70 max-w-2xl">
              Have questions, suggestions, or partnership ideas? Feel free to
              reach out. We're always happy to connect with our community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl">
                  Send a Message
                </h2>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />

                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="textarea textarea-bordered w-full"
                />

                <button className="btn btn-primary mt-2">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <Mail className="text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p>raklinchakma021@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p>+8801609981948</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-primary" />
                    <div>
                      <h3 className="font-bold">Location</h3>
                      <p>Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <Clock className="text-primary" />
                    <div>
                      <h3 className="font-bold">Availability</h3>
                      <p>Monday – Friday</p>
                      <p>9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="alert alert-info">
                <span>
                  We usually respond to emails within 24 hours.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}