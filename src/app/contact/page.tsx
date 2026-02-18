"use client";

import type { FormEvent } from "react";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <>
          <PageHeader title="Contact" />
          <section className="py-16">
            <Container>
              <div className="flex flex-col lg:flex-row gap-12 animate-pulse">
                <div className="lg:w-2/3 space-y-6">
                  <div className="h-7 bg-gray-200 rounded w-64" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><div className="h-4 bg-gray-200 rounded w-24 mb-2" /><div className="h-10 bg-gray-100 rounded" /></div>
                    <div><div className="h-4 bg-gray-200 rounded w-24 mb-2" /><div className="h-10 bg-gray-100 rounded" /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><div className="h-4 bg-gray-200 rounded w-16 mb-2" /><div className="h-10 bg-gray-100 rounded" /></div>
                    <div><div className="h-4 bg-gray-200 rounded w-16 mb-2" /><div className="h-10 bg-gray-100 rounded" /></div>
                  </div>
                  <div><div className="h-4 bg-gray-200 rounded w-32 mb-2" /><div className="h-10 bg-gray-100 rounded" /></div>
                  <div><div className="h-4 bg-gray-200 rounded w-20 mb-2" /><div className="h-32 bg-gray-100 rounded" /></div>
                  <div className="h-12 bg-gray-200 rounded w-40" />
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gray-100 p-8 rounded-lg space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-48" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full mt-6" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </>
      }
    >
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    state: "",
    preferredContact: "email" as "email" | "phone",
    howHeard: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Replace with API route (Resend integration)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHeader title="Thank You" />
        <section className="py-16">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
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
              <h2 className="text-2xl font-bold mb-4">
                Message Sent Successfully
              </h2>
              <p className="text-gray-600 mb-8">
                Thank you for reaching out. Our team will review your inquiry
                and get back to you within one business day.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    state: "",
                    preferredContact: "email",
                    howHeard: "",
                    message: "",
                  });
                }}
                className="text-accent hover:underline font-medium"
              >
                Send another message
              </button>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Contact" />

      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6">
                Request a Free Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* Company + State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State / Location
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* Service selector */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred contact method */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            preferredContact: "email",
                          })
                        }
                        className="accent-accent"
                      />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            preferredContact: "phone",
                          })
                        }
                        className="accent-accent"
                      />
                      <span className="text-sm">Phone</span>
                    </label>
                  </div>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label
                    htmlFor="howHeard"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="howHeard"
                    value={formData.howHeard}
                    onChange={(e) =>
                      setFormData({ ...formData, howHeard: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="search">Search Engine</option>
                    <option value="referral">Professional Referral</option>
                    <option value="conference">Conference / Event</option>
                    <option value="forbes">Forbes Accessibility 100</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-accent text-white px-8 py-3 rounded font-semibold hover:bg-accent-hover transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-bg-light p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600 text-sm">
                        102 Duane Road
                        <br />
                        Fort Totten, NY 11359
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@accessibility-services.com"
                        className="text-accent text-sm hover:underline"
                      >
                        info@accessibility-services.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Free consultation callout */}
                <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">
                    All initial consultations are free. We&apos;ll review your
                    project scope and provide a tailored recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
