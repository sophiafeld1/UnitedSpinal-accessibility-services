# Contact form configuration

## Canonical surface

Site inquiries go through **`/contact` only**.

That includes training, general services, and **Texas RAS**. There is no separate Texas contact form. The Texas RAS service page links into `/contact` with Texas preselected.

`/free-consultation` is a shorter, separate form and is out of scope for Texas routing. Team rows may still show a direct `mailto:` as a fallback.

## Query parameters

| Param | Example | Effect |
| --- | --- | --- |
| `service` | `tx-ras` | Preselects Service of Interest |
| `topic` | `fair-housing` | Preselects the Texas topic dropdown (only used when `service=tx-ras`) |

Examples:

- `/contact?service=tx-ras` — Texas RAS selected; user picks a topic
- `/contact?service=tx-ras&topic=fair-housing` — Texas RAS + Fair Housing
- `/contact?service=training` — Training selected

Helper in code: `getTexasContactHref(topic?)` in `src/data/texasRas.ts` (base constant: `texasContactHref`).

## Texas RAS entry points

From `/services/tx-ras`:

| CTA | Destination |
| --- | --- |
| Discuss Your Texas Project (hero + footer CTA) | `/contact?service=tx-ras` |
| Contact the Texas team (How to Begin) | `/contact?service=tx-ras` |
| Contact Kate | `/contact?service=tx-ras&topic=fair-housing` |
| Contact Rachael | `/contact?service=tx-ras&topic=registration` |

Other site CTAs that already use `/contact?service=…` are unchanged.

## Texas topic → recipient routing

When Service of Interest is **Texas RAS Services**, the form shows a required **What are you reaching out about?** select. Options and routing live in `texasTopicOptions`:

| Topic value | Label | Recipients |
| --- | --- | --- |
| `registration` | Registration | Rachael and Kate |
| `plan-review` | Plan Review | Rachael and Kate |
| `inspections` | Inspections | Rachael and Kate |
| `technical-assistance` | Technical Assistance | Rachael and Kate |
| `existing-conditions` | Existing Conditions | Rachael and Kate |
| `fair-housing` | Fair Housing | Kate |
| `general-tdlr` | General / TDLR | Rachael and Kate |

People and emails: `texasContactPeople` in `src/data/texasRas.ts`.

Helpers:

- `getTexasIntentForTopic(topic)` → `"both" | "kate" | "rachael"`
- `getTexasRecipients(intent)` → contact person list

The form stores a hidden `to` field with the routed emails for future mail wiring. Do **not** show a “directed to …” blurb in the form header.

## Email delivery status

**Not connected.** There is no `/api/contact` / Resend integration yet.

- Non-Texas submits currently show a local “success” UI (placeholder until mail is wired).
- Texas submits must **not** claim the message was sent. The form shows a not-sent status with mailto links to the topic-routed recipients.

When wiring mail later: read `service`, `topic`, and hidden `to` from the form (or recompute recipients from `topic` on the server) and send accordingly.

## Config file map

| File | Role |
| --- | --- |
| `src/app/contact/page.tsx` | Contact page UI, query-param prefill, Texas topic field, submit behavior |
| `src/data/texasRas.ts` | Topics, people, `getTexasContactHref`, recipient helpers |
| `src/data/services.ts` | Service of Interest list (includes `tx-ras`) |
| `src/components/TexasRasDetails.tsx` | Texas page CTAs → `/contact` (no in-page form) |

## Out of scope / separate

- `/free-consultation` form
- Live email delivery
- Texas projects page (`/projects/texas-ras`)
- Direct team mailto links (kept as a backup path)
