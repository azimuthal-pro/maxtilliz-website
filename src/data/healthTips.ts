export type TipCategory =
  | "General Health"
  | "Nutrition"
  | "Medication Safety"
  | "Wellness"
  | "Children's Health"
  | "Women's Health"
  | "Men's Health";

export const tipCategories: TipCategory[] = [
  "General Health",
  "Nutrition",
  "Medication Safety",
  "Wellness",
  "Children's Health",
  "Women's Health",
  "Men's Health",
];

export type TipBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface HealthTip {
  slug: string;
  title: string;
  category: TipCategory;
  date: string;
  summary: string;
  image: string;
  imageAlt: string;
  content: TipBlock[];
}

export const healthTips: HealthTip[] = [
  {
    slug: "5-simple-habits-for-a-healthier-everyday",
    title: "5 Simple Habits for a Healthier Everyday",
    category: "General Health",
    date: "2026-07-20",
    summary:
      "Small, consistent habits make the biggest difference. Five easy changes you can start today to feel better tomorrow.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Woman practising yoga and meditation for daily wellbeing",
    content: [
      {
        type: "p",
        text: "You don't need dramatic changes to improve your health. Small, consistent habits — repeated every day — add up to big results over time. Here are five simple habits worth starting today.",
      },
      {
        type: "h2",
        text: "1. Drink water first",
      },
      {
        type: "p",
        text: "Start your day with a glass of water. Staying hydrated supports your energy, digestion and concentration. Aim for roughly 6–8 glasses across the day.",
      },
      {
        type: "h2",
        text: "2. Move a little, often",
      },
      {
        type: "p",
        text: "You don't need a gym membership. A brisk 20–30 minute walk, stretching, or taking the stairs instead of the lift all count. Consistency beats intensity.",
      },
      {
        type: "h2",
        text: "3. Prioritise sleep",
      },
      {
        type: "p",
        text: "Adults generally need 7–9 hours of sleep. A regular bedtime and limiting screens before bed can dramatically improve how you feel and function.",
      },
      {
        type: "h2",
        text: "4. Eat more whole foods",
      },
      {
        type: "p",
        text: "Add more vegetables, fruits and whole grains to your plate. Simple swaps — like fruit instead of a sugary snack — make a real difference.",
      },
      {
        type: "h2",
        text: "5. Take time to unwind",
      },
      {
        type: "p",
        text: "Chronic stress affects physical health. Even ten minutes of quiet, deep breathing, a hobby, or time with loved ones helps lower daily stress.",
      },
      {
        type: "p",
        text: "Remember: before starting any new health routine, particularly if you have an existing condition or take medication, speak with a healthcare professional.",
      },
    ],
  },
  {
    slug: "understanding-your-prescription",
    title: "Understanding Your Prescription: A Simple Guide",
    category: "Medication Safety",
    date: "2026-07-05",
    summary:
      "What the labels mean, how to take your medicines safely, and the questions worth asking your pharmacist.",
    image:
      "https://images.unsplash.com/photo-1562243061-204550d8a2c9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A prescription medicine bottle with capsules",
    content: [
      {
        type: "p",
        text: "Picking up a new prescription can feel confusing, but taking your medicines correctly is one of the most important things you can do for your health. Here's what to look out for.",
      },
      {
        type: "h2",
        text: "Read the label every time",
      },
      {
        type: "p",
        text: "Check the patient name, the medicine name, the dose, and how often to take it. If anything looks different from last time, ask before you start.",
      },
      {
        type: "h2",
        text: "Know how and when to take it",
      },
      {
        type: "ul",
        items: [
          "With or without food? Check the label or ask.",
          "Same time each day? Setting a daily reminder helps.",
          "What to do if you miss a dose — never double up without asking.",
        ],
      },
      {
        type: "h2",
        text: "Watch for side effects",
      },
      {
        type: "p",
        text: "Most side effects are mild and settle quickly. However, if you experience severe reactions, swelling, difficulty breathing or chest pain, seek medical help immediately.",
      },
      {
        type: "h2",
        text: "Ask your pharmacist",
      },
      {
        type: "p",
        text: "Your pharmacist is there to help. Ask about interactions with other medicines, supplements or food, and what to do if you feel worse. Never hesitate to ask questions.",
      },
      {
        type: "p",
        text: "This guide is for general information only and does not replace advice from your prescriber or pharmacist. Always follow your specific instructions.",
      },
    ],
  },
  {
    slug: "eating-well-on-a-budget",
    title: "Eating Well on a Budget: Nutrition Tips",
    category: "Nutrition",
    date: "2026-06-18",
    summary:
      "Healthy eating doesn't have to be expensive. Practical tips to eat well without breaking the bank.",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh assorted vegetables for healthy eating",
    content: [
      {
        type: "p",
        text: "Many people assume that eating healthily is expensive — but with a little planning, it can actually be more affordable than you think.",
      },
      {
        type: "h2",
        text: "Plan your meals in advance",
      },
      {
        type: "p",
        text: "Drawing up a simple weekly menu helps you buy only what you need and cuts down on food waste — and wasted food is wasted money.",
      },
      {
        type: "h2",
        text: "Choose in-season foods and buy in bulk",
      },
      {
        type: "p",
        text: "Seasonal fruits and vegetables are cheaper and fresher, while buying staples like rice, beans, oats and pasta in bulk saves money over time.",
      },
      {
        type: "h2",
        text: "Cook once and eat twice",
      },
      {
        type: "p",
        text: "Prepare larger portions and store the leftovers. A big pot of soup or stew can easily become several meals across the week.",
      },
      {
        type: "p",
        text: "Eating well on a budget is about making smart choices, not sacrifices. Small changes add up to healthier days and a healthier wallet.",
      },
    ],
  },
  {
    slug: "staying-hydrated-through-the-day",
    title: "Staying Hydrated Through the Day",
    category: "Wellness",
    date: "2026-05-30",
    summary:
      "Why hydration matters, how much you really need, and easy ways to drink more water.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A clear glass of water for staying hydrated",
    content: [
      {
        type: "p",
        text: "Water keeps every system in your body working properly — from your heart and brain to your skin and joints. Yet many of us simply don't drink enough.",
      },
      {
        type: "h2",
        text: "How much do you need?",
      },
      {
        type: "p",
        text: "A common guideline is around 6–8 glasses (about 2 litres) a day, though needs vary with activity, weather and health conditions. Thirst is a useful signal — but by the time you feel thirsty, you're already mildly dehydrated.",
      },
      {
        type: "h2",
        text: "Easy ways to drink more",
      },
      {
        type: "ul",
        items: [
          "Keep a water bottle on your desk and refill it.",
          "Drink a glass with each meal.",
          "Add lemon, cucumber or mint for flavour.",
          "Set a phone reminder every couple of hours.",
        ],
      },
      {
        type: "h2",
        text: "When to be careful",
      },
      {
        type: "p",
        text: "Some conditions, such as heart or kidney problems, require fluid limits. If you're unsure about the right amount for you, ask your doctor or pharmacist.",
      },
    ],
  },
  {
    slug: "childrens-health-immunity-basics",
    title: "Children's Health: Building Strong Immunity",
    category: "Children's Health",
    date: "2026-05-12",
    summary:
      "Practical ways to support your child's immune system through nutrition, sleep and everyday habits.",
    image:
      "https://images.unsplash.com/photo-1740741704354-86d56c5ff3f6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A happy black girl smiling outside",
    content: [
      {
        type: "p",
        text: "Children's immune systems are still learning — and everyday habits play a big role in keeping them strong and healthy.",
      },
      {
        type: "h2",
        text: "Build a balanced plate",
      },
      {
        type: "p",
        text: "Variety is key: colourful fruits and vegetables, proteins, whole grains and healthy fats give little bodies the nutrients they need to grow and fight off bugs.",
      },
      {
        type: "h2",
        text: "Prioritise sleep and activity",
      },
      {
        type: "p",
        text: "Well-rested, active children are better able to fight off infection. Encourage outdoor play and keep a consistent bedtime routine.",
      },
      {
        type: "h2",
        text: "Practise good hygiene",
      },
      {
        type: "p",
        text: "Teach regular handwashing — before meals, after the toilet, and after coughing or sneezing. It's one of the most effective ways to prevent illness.",
      },
      {
        type: "p",
        text: "For any concerns about your child's health, development or medicines, always speak with your paediatrician or pharmacist. Never give children adult medicines without professional advice.",
      },
    ],
  },
  {
    slug: "womens-health-regular-checkups",
    title: "Women's Health: Why Regular Check-Ups Matter",
    category: "Women's Health",
    date: "2026-04-22",
    summary:
      "Routine screenings and check-ups catch problems early and keep you in control of your health.",
    image:
      "https://images.unsplash.com/photo-1631558554226-fb65b25aa939?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A healthcare professional talking with a black woman patient",
    content: [
      {
        type: "p",
        text: "Prevention is always better than cure. Regular check-ups and screenings help detect health issues early, when they're easiest to manage.",
      },
      {
        type: "h2",
        text: "Know your numbers",
      },
      {
        type: "p",
        text: "Blood pressure, blood sugar and cholesterol checks give you a clear picture of your health. Knowing your numbers helps you act early if something changes.",
      },
      {
        type: "h2",
        text: "Stay up to date with screenings",
      },
      {
        type: "p",
        text: "Depending on your age and family history, regular screenings such as blood pressure, cervical and breast checks may be recommended. Ask your healthcare provider what's right for you.",
      },
      {
        type: "h2",
        text: "Listen to your body",
      },
      {
        type: "p",
        text: "You know yourself best. If something feels off — persistent fatigue, pain, or changes you can't explain — don't wait. Speak to a professional.",
      },
      {
        type: "p",
        text: "Your pharmacist can help with health screening services and advice. For full check-ups and referrals, see your doctor.",
      },
    ],
  },
  {
    slug: "mens-health-five-things-to-watch",
    title: "Men's Health: Five Things to Watch",
    category: "Men's Health",
    date: "2026-04-02",
    summary:
      "Men often skip check-ups. Here are five health areas every man should keep an eye on.",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "An active man exercising to stay healthy",
    content: [
      {
        type: "p",
        text: "Men are more likely than women to skip routine check-ups — yet many serious conditions are preventable when caught early. Here's what to watch.",
      },
      {
        type: "ul",
        items: [
          "Blood pressure — high blood pressure often has no symptoms.",
          "Heart health — know your cholesterol and stay active.",
          "Blood sugar — especially if you have a family history of diabetes.",
          "Weight and waistline — carry fat around the middle raises risk.",
          "Mental health — stress and mood matter just as much as physical health.",
        ],
      },
      {
        type: "h2",
        text: "Small steps, big difference",
      },
      {
        type: "p",
        text: "Regular exercise, a balanced diet, limiting alcohol and quitting smoking are the foundations of good health. Pair them with regular check-ups and you're giving yourself the best chance.",
      },
      {
        type: "p",
        text: "Have questions about screenings, supplements or any health concern? Visit your local pharmacy — we're happy to help.",
      },
    ],
  },
];
