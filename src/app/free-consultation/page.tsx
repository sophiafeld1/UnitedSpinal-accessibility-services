"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { services } from "@/data/services";
import { stats } from "@/data/stats";
import Container from "@/components/Container";

export default function FreeConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-16">
        <Container className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Accessibility Consultation
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Tell us about your project and our team of certified specialists
            will provide a personalized assessment at no cost.
          </p>

          {/* Stats inline */}
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="py-16">
        <Container>
          <div className="max-w-xl mx-auto">
            {submitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-600">
                  We&apos;ll be in touch within one business day to discuss your
                  project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fc-email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="fc-email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fc-phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="fc-phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fc-service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="fc-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="fc-message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="fc-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-lg"
                >
                  Request Free Consultation
                </button>
                <p className="text-xs text-gray-400 text-center">
                  No obligation. We&apos;ll review your project and provide a
                  tailored recommendation.
                </p>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
