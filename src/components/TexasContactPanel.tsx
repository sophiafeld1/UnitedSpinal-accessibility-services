"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";
import type { TexasRecipientIntent } from "@/data/texasRas";
import { getTexasRecipients } from "@/data/texasRas";

const fieldClass =
  "w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

interface TexasContactPanelProps {
  intent: TexasRecipientIntent;
  heading?: string;
  id?: string;
}

export default function TexasContactPanel({
  intent,
  heading,
  id,
}: TexasContactPanelProps) {
  const formId = useId();
  const recipients = getTexasRecipients(intent);
  const emails = recipients.map((person) => person.email).join(", ");
  const names = recipients.map((person) => person.firstName).join(" and ");
  const title = heading ?? `Contact ${names}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [notSent, setNotSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setNotSent(true);
  };

  return (
    <div
      id={id}
      className="border border-[#e2e2e2] bg-white p-6 md:p-8"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        This message will be directed to {names}. Email{" "}
        {recipients.map((person, index) => (
          <span key={person.email}>
            {index > 0 ? " or " : null}
            <a
              href={`mailto:${person.email}`}
              className={`text-accent hover:underline ${focusRing}`}
            >
              {person.email}
            </a>
          </span>
        ))}
        .
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="to" value={emails} readOnly />
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor={`${formId}-company`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              id={`${formId}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={(event) =>
                setFormData({ ...formData, company: event.target.value })
              }
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message *
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            className={fieldClass}
          />
        </div>
        {notSent && (
          <p role="status" className="text-gray-700 leading-relaxed">
            Your inquiry has not been sent. Email {names} directly at{" "}
            {recipients.map((person, index) => (
              <span key={person.email}>
                {index > 0 ? " or " : null}
                <a
                  href={`mailto:${person.email}`}
                  className={`text-accent hover:underline ${focusRing}`}
                >
                  {person.email}
                </a>
              </span>
            ))}
            .
          </p>
        )}
        <button
          type="submit"
          className={`bg-accent text-white px-8 py-3 rounded font-semibold hover:bg-accent-hover transition-colors ${focusRing} focus-visible:outline-black`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
