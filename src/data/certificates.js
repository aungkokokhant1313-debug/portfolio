/**
 * Aung Ko Ko Khant — Credentials & Certifications Data
 *
 * HOW TO ADD A NEW CERTIFICATE:
 * 1. Place your certificate image (PNG, JPG, WebP) or PDF file inside:
 *    public/certificates/your-certificate-file.png
 * 2. Add a new object entry to the `certificates` array below.
 * 3. Use one of the supported categories:
 *    - "Artificial Intelligence & Machine Learning"
 *    - "Web Development"
 *    - "Programming"
 *    - "Cybersecurity"
 *    - "Cloud Computing"
 *    - "Other Technical Certifications"
 * 4. Fill in `verificationUrl` if a public verification link exists (or set to null).
 * 5. Fill in `credentialId` if a certificate ID exists (or set to null).
 */

export const supportedCategories = [
  "Artificial Intelligence & Machine Learning",
  "Web Development",
  "Programming",
  "Cybersecurity",
  "Cloud Computing",
  "Other Technical Certifications",
];

export const certificates = [
  {
    id: "cursor-ai-hackathon-myanmar-2026",
    title: "Certificate of Participation — Cursor AI Hackathon Myanmar",
    issuer: "Cursor & SpaceX Myanmar Community",
    date: "29 August 2026",
    category: "Artificial Intelligence & Machine Learning",
    image: "/certificates/cursor-ai-hackathon-myanmar.png",
    credentialId: null, // Not specified on certificate
    verificationUrl: null, // No external verification URL issued
    description:
      "Awarded to Aung Ko Ko Khant for active participation in the Cursor AI Hackathon Myanmar as part of Team Oblivion Icon. The team architected and prototyped an AI-driven inventory decision-support system leveraging OpenRouter language models and live market news ingestion to forecast retail demand signals.",
    skills: [
      "Cursor",
      "AI Prototyping",
      "Prompt Engineering",
      "OpenRouter LLMs",
      "Hackathon MVP",
    ],
    team: "Team · Oblivion Icon",
    signatory: "Donggu Lee @ Brandon (SpaceX Ambassador, SpaceX Myanmar Community)",
    featured: true,
  },
];

// Dynamically extract categories that actually have certificates, maintaining "All" at index 0
export const certificateCategories = [
  "All",
  ...Array.from(new Set(certificates.map((c) => c.category).filter(Boolean))),
];

