import { assetPath } from "@/app/lib/site-path";

export type ContentBlock = { heading?: string; text: string; id?: string; link?: { href: string; label: string } };

export const site = {
  address: "Leece Street, Liverpool L1 2TR",
  email: "hello@slboc.com",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=St+Luke%27s+Bombed+Out+Church+Leece+Street+Liverpool+L1+2TR",
  contactImage: assetPath("/images/church-arch.jpg"),
  notice: "Practical information, opening times and event details are local prototype content. Please verify before publishing.",
};

export const pages = {
  visit: {
    eyebrow: "Plan your visit",
    title: "Find your way into the story.",
    intro: "St Luke’s sits between Bold Street, the Knowledge Quarter and Liverpool Cathedral. Come in for a quiet look around, an event, a drink in the garden or a deeper dive into the building’s history.",
    image: assetPath("/images/church-arch.jpg"),
    alt: "St Luke’s tower framed by a weathered brick arch.",
    blocks: [
      { heading: "Before you travel", text: "The church, gardens and Garden Bar each have their own rhythm. Check the latest opening information and individual event details before travelling." },
      { heading: "Getting here", text: "Lime Street station is around five minutes away on foot. The site is at the junction of Leece Street and Berry Street; city-centre bus, cycle and parking options are nearby." },
      { heading: "Access", text: "A step-free entrance and accessible toilet are available. Surfaces are historic and can be uneven, particularly outdoors. Please contact the team before visiting if you would like to discuss access, seating or a quieter visit." },
    ],
  },
  story: {
    eyebrow: "Our story",
    title: "A landmark made by Liverpool — and remade by its people.",
    intro: "St Luke’s has watched Liverpool change for almost two centuries. Damaged during the Blitz and left open to the sky, it is now a place to remember, meet, make and celebrate.",
    image: assetPath("/images/church-roof.jpg"),
    alt: "The open roof and stone arches inside St Luke’s.",
    blocks: [
      { heading: "A church in the city", text: "The foundation stone was laid on 9 April 1811 and St Luke’s opened in 1832. Built at the edge of a growing city, its distinctive tower has remained a point of orientation for generations of Liverpool people." },
      { heading: "Open to the sky", text: "Just after midnight on 6 May 1941, an incendiary bomb struck the church during the May Blitz. The fire left only the masonry shell standing. Preserved as a memorial, the roofless building still carries visible evidence of that night." },
      { heading: "A living place", text: "Today, care for the building sits alongside events, weddings, hospitality, community activity and an open invitation to stop for a moment." },
      { id: "above-us-only-sky", heading: "Above us, only sky?", text: "Tony Phillips’ heritage art trail brings nineteen hand-painted panels into conversation with the church and Liverpool’s twentieth-century history. The project links work at St Luke’s with the Bluecoat and invites visitors to move through the site slowly, looking at the building as both memorial and creative space." },
      { id: "20th-century-chapel", heading: "20th-century chapel", text: "This site-specific mural installation by Tony Phillips uses the ruined church as a place to reflect on conflict, remembrance and the modern city. It is part of St Luke’s continuing heritage programme and can be explored when the building is open; display locations and access should be confirmed before travelling." },
    ],
  },
  garden: {
    eyebrow: "Garden Bar & Café",
    title: "Good things grow here.",
    intro: "The Garden Bar is a sociable corner of the city: drinks, food, sunshine when it appears and a view unlike anywhere else in Liverpool.",
    image: assetPath("/images/garden-bar.jpg"),
    alt: "People enjoying the Garden Bar alongside the church.",
    blocks: [
      { heading: "Opening times", text: "The Garden Bar is open for the summer season. Opening days and hours are weather-dependent and may change from week to week, so check the latest update before travelling.", link: { href: "https://www.instagram.com/bocgardenbar/", label: "Latest opening times on Instagram" } },
      { heading: "A bar in the garden", text: "Drop in for a drink, catch up with friends or make an afternoon of it. The outdoor bar is family-friendly and dog-friendly." },
      { heading: "In the heart of the city", text: "The bar is part of the wider St Luke’s experience: relaxed, outdoors and close to the building’s remarkable brickwork and tower." },
      { heading: "Events in the garden", text: "Some What’s On listings take place in or around the Garden Bar. Look for the location on each event page before making plans." },
    ],
  },
  weddings: {
    eyebrow: "Weddings at St Luke’s",
    title: "Begin with a place that has a story of its own.",
    intro: "For couples looking for a setting with atmosphere, history and an unmistakably Liverpool sense of place, St Luke’s offers a remarkable backdrop for a celebration.",
    image: assetPath("/images/garden-crowd.jpg"),
    alt: "People gathering in the sunny garden beside St Luke’s.",
    blocks: [
      { heading: "Your day, your way", text: "The building and gardens can provide a striking setting for ceremonies, receptions and photographs. Capacity, permissions and supplier arrangements should be confirmed with the weddings team." },
      { heading: "A practical conversation", text: "Tell us the shape of your day, your preferred date and the number of people you are planning for. We will talk through the spaces, timings and what is possible." },
    ],
  },
  hire: {
    eyebrow: "Venue hire",
    title: "Make an occasion of it.",
    intro: "From launches and performances to filming, dinners and private celebrations, St Luke’s is a venue that brings its own character before anyone arrives.",
    image: assetPath("/images/church-nave.jpg"),
    alt: "The ruined nave looking towards the tower and open sky.",
    blocks: [
      { heading: "A flexible setting", text: "The church and its outdoor spaces can host cultural, corporate and private activity. Every event begins with a conversation about the format, audience, timing and technical needs." },
      { heading: "Respecting the building", text: "St Luke’s is historic, open to the weather and emotionally important to many people. A good event plan works with the building’s character and the needs of neighbours and visitors." },
    ],
  },
  involved: {
    eyebrow: "Get involved",
    title: "Help keep the story moving.",
    intro: "St Luke’s is cared for and animated by a wide circle of people. There are ways to volunteer, support the building and share what makes this place matter.",
    image: assetPath("/images/church-wall.jpg"),
    alt: "The long red-brick wall and arches of St Luke’s.",
    blocks: [
      { heading: "Volunteer", text: "Volunteering can include welcoming people, helping with events, sharing stories and practical support. Opportunities vary, so please register your interest rather than relying on an old vacancy listing." },
      { heading: "Support the church", text: "Gifts, partnerships and fundraising help sustain the building and its future. Donation options are a prototype here and need to be connected to an approved service before launch." },
    ],
  },
} as const;

export const faqs = [
  ["Can we visit before we book?", "Yes — a visit is the best way to understand the scale and atmosphere of St Luke’s. Arrange this with the weddings team, as access can depend on public events and seasonal opening."],
  ["Do you have a list of suppliers?", "The final site should provide up-to-date guidance on approved or recommended suppliers. This prototype does not make a current recommendation."],
  ["Is the venue accessible?", "There is step-free access and an accessible toilet. The historic site has uneven surfaces, so discuss individual requirements with the team early."],
  ["What happens if the weather changes?", "St Luke’s is partly open to the elements. Event and wedding plans should include an agreed wet-weather and contingency approach."],
] as const;

const publishedPosts = [
  { title: "Looking back at a year of events at St Luke’s Bombed Out Church", date: "2025-10-09" },
  { title: "A massive thank you to the Heritage Fund UK & National Lottery Players as we come to the end of our very first Heritage Grant project", date: "2025-09-12" },
  { title: "A huge thank you to Online Turf for sponsoring our summer lawn", date: "2025-08-06" },
  { title: "Thank you to Online Turf", date: "2024-06-18" },
  { title: "Our trip on the City Explorer Liverpool", date: "2024-06-12" },
  { title: "Reflecting on a vibrant quarter: celebrating creativity, community and awareness", date: "2024-05-09" },
  { title: "Top 10 must-visit beer gardens and outdoor spaces", date: "2024-04-30" },
  { title: "2023 round-up", date: "2023-12-21" },
  { title: "VisitEngland’s Awards for Excellence 2023: Gold Award winners for resilience and innovation", date: "2023-06-27" },
  { title: "Spring highlights 2023", date: "2023-06-07" },
  { title: "Bombed Out Church Beer Festival 2023", date: "2023-04-29" },
  { title: "Bombed Out Church Garden Bar & Café has reopened", date: "2023-04-05" },
  { title: "Winners of the Resilience and Innovation Award at the Liverpool City Region Tourism Awards", date: "2023-03-07" },
  { title: "Summer and early autumn highlights", date: "2022-11-21" },
];

const postBodyByTitle: Record<string, string[]> = {
  "Looking back at a year of events at St Luke’s Bombed Out Church": [
    "As summer drew to a close, St Luke’s looked back on a season shaped by theatre, live music, markets, festivals and community gatherings. Each event used the open-air building in a different way while keeping the focus on people coming together.",
    "Highlights included Treasure Island from Off the Ground Theatre, choir performances, Savera UK’s cultural programme, chess in the gardens, the Beer & Cider Festival, the Liverpool Fire Arts Festival and regular makers’ and record fairs.",
    "The year also made room for art: Tony Phillips’ Above Us Only Sky? and Amy Flynn’s Technofossils brought new ideas into a building already full of stories. The team thanked the artists, organisers, volunteers and visitors who made the programme possible.",
  ],
  "A massive thank you to the Heritage Fund UK & National Lottery Players as we come to the end of our very first Heritage Grant project": [
    "St Luke’s marked the close of its first Heritage Grant project with thanks to The National Lottery Heritage Fund and National Lottery players. The project created space to explore the building’s past and the people who continue to give it life.",
    "Its value was not simply financial: it supported opportunities to share heritage, bring people together and strengthen the church’s role as a welcoming civic space.",
    "Before publication, confirm the project’s final activities, partners, grant amount and approved wording with the Heritage Fund documentation.",
  ],
  "A huge thank you to Online Turf for sponsoring our summer lawn": [
    "At the end of May 2025, the nave received a fresh summer lawn with support from local supplier Online Turf. The renewed green space helped make the church feel welcoming and practical for visitors, events and community activity.",
    "Online Turf, based in West Lancashire, supplied locally grown turf. The partnership shows how support from nearby businesses can sustain an unusual inner-city green space.",
    "The original article included a time-limited discount code and supplier promotion; these remain part of the archive rather than a current offer.",
  ],
  "Thank you to Online Turf": [
    "This earlier update celebrated the re-turfing of the church nave and the positive response from visitors. A new lawn transformed the open interior into a softer, more inviting place to pause, meet and enjoy the building.",
    "The post thanked Online Turf for helping the site prepare its seasonal garden setting and reflected on how the grass supports the church’s changing programme.",
    "This overlaps with the 2025 sponsorship story, but remains in the archive as a record of the earlier season. Check the original year and supplier references before launch.",
  ],
  "Our trip on the City Explorer Liverpool": [
    "The St Luke’s team spent a day seeing Liverpool through visitors’ eyes on the City Explorer hop-on, hop-off tour. Boarding at the Bombed Out Church stop, they praised the live guide, the top-deck view and the chance to rediscover familiar streets.",
    "The route connected the church with nearby landmarks including the city’s two cathedrals, public art and music heritage. It was a reminder that St Luke’s is both a destination in its own right and part of a wider city story.",
    "The original article mentioned a Garden Bar ticket discount and specific opening days. Treat those details as historic unless they are reconfirmed.",
  ],
  "Reflecting on a vibrant quarter: celebrating creativity, community and awareness": [
    "From February to April 2024, St Luke’s hosted a lively mix of light art, markets, music, family activity, dance, wellbeing and heritage open days. The quarter showed how the building can hold both large public moments and smaller shared experiences.",
    "The programme included The Boy & The Pearl, tree-sapling distribution with Mersey Forest, makers’ markets, record fairs, Easter activities, concerts, a beer festival, wedding celebrations and dance activity. It also hosted an awareness-focused augmented-reality exhibition.",
    "More than a programme recap, the story thanks partners and visitors for supporting a place where culture, community and conservation meet. Named partners and attendance figures should be retained only after approval.",
  ],
  "Top 10 must-visit beer gardens and outdoor spaces": [
    "This seasonal guide celebrated ten Liverpool places to enjoy an outdoor drink, beginning with St Luke’s Garden Bar & Café. It positioned the garden as a relaxed, family- and dog-friendly city-centre setting beside one of Liverpool’s most distinctive landmarks.",
    "The wider list encouraged readers to explore outdoor spaces across the city, from hidden gardens to neighbourhood pubs and social venues.",
    "As a 2024 recommendation piece, it carries a dated archive label. Opening hours, offers and third-party recommendations must be checked before being presented as current advice.",
  ],
  "2023 round-up": [
    "In 2023, St Luke’s hosted more than 110 events, welcoming over 32,300 people through a programme spanning culture, celebration, community activity and heritage engagement.",
    "The year demonstrated the scale of what can happen in a roofless historic church: public events, independent traders, live performance and everyday visits all contributed to the building’s future.",
    "These figures are retained as an annual snapshot and should be confirmed against the organisation’s reporting records.",
  ],
  "VisitEngland’s Awards for Excellence 2023: Gold Award winners for resilience and innovation": [
    "St Luke’s celebrated receiving Gold in the Resilience and Innovation category at the VisitEngland Awards for Excellence 2023. The recognition acknowledged the work of turning a challenging historic site into a welcoming, adaptable visitor destination.",
    "The award reflected a collective effort by the team, volunteers, partners and visitors who have helped the church recover, evolve and remain open to the city.",
    "Confirm the official award title, category and any rights-required VisitEngland logo use before publication.",
  ],
  "Spring highlights 2023": [
    "Spring 2023 brought the reopening of the Garden Bar & Café, family Easter activity, a busy beer festival and the first legally binding wedding at St Luke’s. Music, chess, markets, record fairs and graduation celebrations added to a full season.",
    "Eurovision gave the programme a special energy, with themed events and a public screening connecting the church to a city-wide celebration. The gardens also continued to develop as a greener habitat for plants and wildlife.",
    "The post ended by remembering director Mark Hensby and reaffirming the commitment to care for St Luke’s as a place for culture, community, remembrance and heritage.",
  ],
  "Bombed Out Church Beer Festival 2023": [
    "The 2023 Beer Festival brought visitors and real-ale enthusiasts to St Luke’s for a spring weekend of drinks, music and shared time in the gardens. Local and regional breweries helped make the church an informal meeting place as well as a heritage landmark.",
    "The post captures the character of a festival that mixes independent producers with the building’s distinctive setting. It belongs in the archive rather than as a permanent event page.",
    "Any future Beer Festival listing should be created afresh with current dates, licensing information, suppliers, accessibility details and ticket terms.",
  ],
  "Bombed Out Church Garden Bar & Café has reopened": [
    "In spring 2023, the Garden Bar & Café reopened for the season, inviting people to meet friends and family in a setting unlike any other in central Liverpool.",
    "The update framed the bar as part of the church’s wider social life: a casual place to enjoy the gardens, support the site and spend time beside the building’s dramatic architecture.",
    "This is a historical reopening notice. Current hours, food, drink, dog policy and seasonal operation must be sourced from the live team before reuse.",
  ],
  "Winners of the Resilience and Innovation Award at the Liverpool City Region Tourism Awards": [
    "St Luke’s was delighted to receive the Resilience and Innovation Award at the Liverpool City Region Tourism Awards. The recognition celebrated a model of heritage that is active, adaptable and rooted in the city’s community.",
    "The award recognised the work required to keep a bomb-damaged church meaningful to new generations through public access, events, volunteering and partnership.",
    "Confirm the exact award name, year and organiser-approved language before publishing this archive item.",
  ],
  "Summer and early autumn highlights": [
    "This seasonal round-up looked back on a summer and early autumn of open days, performances, markets, community activity and visitors discovering St Luke’s for the first time.",
    "The post presents the church as an evolving meeting point: somewhere to learn about Liverpool’s history, see an event, meet friends or simply experience a quiet moment under the open sky.",
    "Specific event names, dates, attendance figures and operating details need checking against the original Wix post before this archive page goes live.",
  ],
};

const postImages = ["church-roof.jpg", "church-arch.jpg", "garden-bar.jpg", "church-nave.jpg", "church-wall.jpg", "garden-crowd.jpg"];

export const posts = publishedPosts.map(({ title, date }, index) => ({
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  date,
  excerpt: "An archived story from St Luke’s about the building, its programme, partners and the community around it.",
  image: assetPath(`/images/${postImages[index % postImages.length]}`),
  imageAlt: "A view of St Luke’s Bombed Out Church in Liverpool.",
  body: postBodyByTitle[title],
}));
