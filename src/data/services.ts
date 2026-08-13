export interface Service {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    image:
      "https://images.unsplash.com/photo-1642055514517-7b52288890ec?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pharmacy shelves stocked with medicine boxes",
    title: "OTC Medicines",
    description:
      "Over-the-counter remedies for common ailments, always in stock and clearly explained by our team.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Healthcare professional consulting with a patient",
    title: "Health Consultations",
    description:
      "Private, friendly consultations for advice on your medicines and minor health concerns.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1739289696449-cba3a5ef085d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pharmacist advising a customer at the counter",
    title: "Medication Guidance",
    description:
      "Clear guidance on how and when to take your medicines safely and effectively.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Checking a patient's blood pressure during a screening",
    title: "Health Screening",
    description:
      "Simple screening checks to help you stay on top of your blood pressure, sugar and more.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1687200267991-d86b8df69968?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A group of vitamin and supplement bottles",
    title: "Wellness Products",
    description:
      "Vitamins, supplements and wellness products to support your everyday wellbeing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hands applying lotion from a personal care pump bottle",
    title: "Personal Care Products",
    description:
      "Personal and family care essentials for every day — from skincare to first aid.",
  },
];
