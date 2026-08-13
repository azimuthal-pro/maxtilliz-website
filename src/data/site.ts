export const site = {
  name: "Maxtilliz Chem",
  tagline: "Your Trusted Community Pharmacy",
  description:
    "A community pharmacy offering prescription dispensing, health consultations, medication guidance, health screening, wellness and personal care products.",
  phone: "[+233 59 479 0091]", 
  whatsapp: "[+233 59 479 0091]", 
  email: "[maxtillizpharmacy@gmail.com]",
  locations: [
    {
      name: "Main Branch",
      street: "[Ablekuma Olebu, God first St. , Accra]",
      city: "[Accra, Ablekuma Olebu]",
      full: "[Ablekuma Olebu, God first St., Accra]",
    },
    {
      name: "Second Branch",
      street: "[Ablekuma Agbajeena, Agbajeena St., Accra]",
      city: "[Accra, Ablekuma Agbajeena]",
      full: "[Ablekuma Agbajeena, Agbajeena St. , Accra]",
    },
  ],
  hours: [
    { days: "Monday – Saturday", time: "7:30 AM – 9:00 PM" },
    { days: "Sunday", time: "1:30 PM – 9:00 PM" },
  ],
  social: {
    facebook: "[https://facebook.com/maxtillizpharmacy]",
    instagram: "[https://instagram.com/maxtillizpharmacy]",
    x: "[https://x.com/maxtillizpharmacy]",
    tiktok: "[https://tiktok.com/@maxtillizpharmacy]",
  },
  mapsEmbedUrl: "[https://www.google.com/maps/embed?...]",
  stats: {
    years: "6+",
    customers: "3,000+",
    branches: "2",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Health Tips", href: "/health-tips" },
  { label: "Contact", href: "/contact" },
] as const;
