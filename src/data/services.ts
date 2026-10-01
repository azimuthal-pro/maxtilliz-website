export interface Service {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    image: "/images/otc-medicines.png",
    imageAlt:
      "Neatly stocked pharmacy shelves with over-the-counter medicines and health products",
    title: "OTC Medicines",
    description:
      "Over-the-counter remedies for common ailments, always in stock and clearly explained by our team.",
    highlights: [
      "Everyday remedies for colds, pain, fever and allergies",
      "Genuine, quality-assured products",
      "Clear dosing advice from our team",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Healthcare professional consulting with a patient",
    title: "Health Consultations",
    description:
      "Private, friendly consultations for advice on your medicines and minor health concerns.",
    highlights: [
      "A private space to talk through your concerns",
      "Advice on medicines and minor ailments",
      "No appointment needed — just walk in",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1739289696449-cba3a5ef085d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pharmacist advising a customer at the counter",
    title: "Medication Guidance",
    description:
      "Clear guidance on how and when to take your medicines safely and effectively.",
    highlights: [
      "How and when to take your medicines",
      "Understanding side effects and interactions",
      "Support with refills and sticking to your routine",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Checking a patient's blood pressure during a screening",
    title: "Health Screening",
    description:
      "Simple screening checks to help you stay on top of your blood pressure, sugar and more.",
    highlights: [
      "Blood pressure and blood sugar checks",
      "Quick and painless, done in-store",
      "Results explained in plain language",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1687200267991-d86b8df69968?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A group of vitamin and supplement bottles",
    title: "Wellness Products",
    description:
      "Vitamins, supplements and wellness products to support your everyday wellbeing.",
    highlights: [
      "Vitamins, minerals and supplements",
      "Options for immunity, energy and everyday wellbeing",
      "Guidance on what suits your needs",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hands applying lotion from a personal care pump bottle",
    title: "Personal Care Products",
    description:
      "Personal and family care essentials for every day — from skincare to first aid.",
    highlights: [
      "Skin, oral, hair and body care",
      "First aid and family essentials",
      "Trusted brands at fair prices",
    ],
  },
];
