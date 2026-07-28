export type EventCategory = "Music" | "Wellbeing" | "Heritage" | "Community" | "Garden Bar";

export type VenueEvent = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  endTime?: string;
  category: EventCategory;
  image: string;
  imageAlt: string;
  price: string;
  location: string;
  access: string;
  featured?: boolean;
};

export const eventCategories: EventCategory[] = [
  "Music",
  "Wellbeing",
  "Heritage",
  "Community",
  "Garden Bar",
];

export const events: VenueEvent[] = [
  {
    id: "sound-bath",
    slug: "sound-bath-experience",
    title: "Sound Bath Experience",
    summary: "An immersive evening of sound and stillness beneath the open roof.",
    description:
      "Settle into the stillness of St Luke’s for a guided sound bath with crystal bowls, gentle gong and voice. Bring something comfortable to lie on and let the space do the rest.",
    date: "2026-08-08",
    time: "19:00",
    endTime: "20:30",
    category: "Wellbeing",
    image: "/images/church-nave.jpg",
    imageAlt: "View through the ruined nave towards St Luke’s tower and blue sky.",
    price: "£18",
    location: "Inside St Luke’s",
    access: "Step-free entrance available. Please tell us your access needs when booking.",
    featured: true,
  },
  {
    id: "summer-sessions",
    slug: "summer-sessions",
    title: "Summer Sessions: Lu.Re",
    summary: "Liverpool voices, late sun and a bar open until late.",
    description: "A live set in one of Liverpool’s most unlikely rooms.",
    date: "2026-08-14",
    time: "19:30",
    endTime: "22:30",
    category: "Music",
    image: "/images/church-arch.jpg",
    imageAlt: "St Luke’s tower framed by a weathered brick arch.",
    price: "£16",
    location: "Garden stage",
    access: "Accessible route and viewing area available.",
  },
  {
    id: "open-doors",
    slug: "open-doors-weekend",
    title: "Open Doors Weekend",
    summary: "Look closer at the building, its stories and the people who care for it.",
    description: "Drop in for short talks, family trails and building tours.",
    date: "2026-08-15",
    endDate: "2026-08-16",
    time: "11:00",
    endTime: "16:00",
    category: "Heritage",
    image: "/images/church-wall.jpg",
    imageAlt: "The long red-brick wall and arches of St Luke’s.",
    price: "Free",
    location: "Across the site",
    access: "Drop-in event; all ages welcome.",
  },
  {
    id: "garden-social",
    slug: "garden-social",
    title: "Garden Social",
    summary: "A long-table afternoon with local food, DJs and a very good view.",
    description: "A relaxed Sunday in the Garden Bar, with food, drinks and friends old and new.",
    date: "2026-08-16",
    time: "14:00",
    endTime: "20:00",
    category: "Garden Bar",
    image: "/images/garden-bar.jpg",
    imageAlt: "Visitors enjoying the Garden Bar beside the church.",
    price: "Free entry",
    location: "Garden Bar",
    access: "Outdoor event with accessible toilets on site.",
  },
  {
    id: "memory-mapping",
    slug: "memory-mapping",
    title: "Memory Mapping: Liverpool",
    summary: "Bring a memory of the city and add it to our shared map.",
    description: "A friendly afternoon of conversation, drawing and local stories.",
    date: "2026-08-21",
    time: "13:00",
    endTime: "15:30",
    category: "Community",
    image: "/images/garden-crowd.jpg",
    imageAlt: "Crowd gathering in the sunny garden beside St Luke’s.",
    price: "Pay what you can",
    location: "Garden room",
    access: "Materials and seating provided.",
  },
  {
    id: "candlelight",
    slug: "candlelight-choir",
    title: "Candlelight Choir",
    summary: "An evening of choral music in the heart of the ruined church.",
    description: "A small choir, big acoustics and the building after dark.",
    date: "2026-08-27",
    time: "20:00",
    endTime: "21:15",
    category: "Music",
    image: "/images/church-roof.jpg",
    imageAlt: "Open-roof interior of St Luke’s Bombed Out Church.",
    price: "£14",
    location: "Inside St Luke’s",
    access: "Some seating is provided; arrive early for step-free seating.",
  },
];

export const formatEventDate = (event: VenueEvent, options?: Intl.DateTimeFormatOptions) => {
  const start = new Date(`${event.date}T12:00:00`);
  const end = event.endDate ? new Date(`${event.endDate}T12:00:00`) : undefined;
  const formatter = new Intl.DateTimeFormat("en-GB", options ?? { weekday: "short", day: "numeric", month: "short" });
  return end ? `${formatter.format(start)} – ${formatter.format(end)}` : formatter.format(start);
};

export const formatTime = (time: string) => time.replace(":", ".");
