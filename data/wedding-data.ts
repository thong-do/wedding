/**
 * Central wedding content configuration
 * Edit this file to update names, dates, venue, text, and images
 */

export interface TimelineItem {
  time: string;
  title: string;
  description?: string;
}

export interface WeddingData {
  couple: {
    bride: string;
    groom: string;
    tagline: string;
  };
  date: string;
  schedule: {
    ceremonyTime: string;
    receptionTime: string;
    dressCode?: string;
    notes?: string;
  };
  timeline: TimelineItem[];
  venue: {
    name: string;
    address: string;
    googleMapsUrl: string;
    embedUrl: string;
    notes?: string;
  };
  story: {
    intro: string;
    images: string[];
  };
  gallery: string[];
  heroImages: string[];
  ending: {
    thankYou: string;
    finalLine: string;
    image?: string;
  };
}

export const weddingData: WeddingData = {
  couple: {
    bride: "Phuong Anh",
    groom: "Minh Thong",
    tagline: "A love story in motion",
  },
  date: "18/04/2026",
  schedule: {
    ceremonyTime: "18:00",
    receptionTime: "18:30",
    dressCode: "Smart casual",
    notes: "Dinner and celebration to follow",
  },
  timeline: [
    { time: "17:00", title: "Guest Arrival" },
    { time: "18:00", title: "Ceremony" },
    { time: "18:30", title: "Reception" },
    { time: "20:30", title: "Celebration" },
  ],
  venue: {
    name: "[Venue Name]",
    address: "[Full Address]",
    googleMapsUrl: "https://maps.google.com",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5530000000003!2d114.1577!3d22.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE2JzQxLjkiTiAxMTTCsDA5JzI3LjciRQ!5e0!3m2!1sen!2shk!4v1234567890",
    notes: "Parking available. Entrance on ground floor.",
  },
  story: {
    intro: "Our story began in the city — among neon reflections, late-night walks, and the quiet moments between the chaos. Hong Kong taught us that love can bloom anywhere, even in the busiest corners of the world. This celebration is our way of sharing that journey with you.",
    images: [
      "https://i.ibb.co/kCVXN24/3-DA6-E9-CB-0572-42-B6-9-CAE-08386-A1-A0674-1-105-c.jpg",
      "https://i.ibb.co/7JMGM1Zg/358-D56-CE-0-E41-45-BE-9-FB2-611-D1-B688553-1-105-c.jpg",
    ],
  },
  gallery: [
    "https://i.ibb.co/JjDLjvjn/8229693-A-0152-444-C-B784-85-AFD1-A76-F39-1-105-c.jpg",
    "https://i.ibb.co/k2CfCtWJ/C2-C4680-D-423-F-4-DB3-9-FA4-C60-BB5-A665-CE-1-105-c.jpg",
    "https://i.ibb.co/fYbbgsPC/ED860337-B8-A2-4179-BCEF-686-D2-AA1-F61-C-1-105-c.jpg",
    "https://i.ibb.co/NdSQ8TcC/74908368-DBF7-4-F47-977-D-39-F31-D6-FC194-1-105-c.jpg",
    "https://i.ibb.co/KjsjJTPs/5-FEE464-C-2-C78-416-B-B0-EF-2265619-EC3-F3-1-105-c.jpg",
    "https://i.ibb.co/m55xyJn2/A50-DFA8-A-A817-4-AC3-A4-AC-D2-B6-E7-F10321-1-105-c.jpg",
    "https://i.ibb.co/tPM2fVsk/FC3-CB550-CE31-4-D91-8616-D45-A7-FCF2897-1-105-c.jpg",
    "https://i.ibb.co/p63bL1fS/E88-F5-C2-B-4977-42-F3-BA7-F-E805-B74-DF69-B-1-105-c.jpg",
    "https://i.ibb.co/m5P4MPRx/2587530-C-DA8-C-4996-8-CCA-91-EDE187-BB83-1-105-c.jpg",
    "https://i.ibb.co/0ySH1Lmg/3-F05897-B-8325-4-BE3-9-D47-A478-D20-DB8-F6-1-105-c.jpg",
    "https://i.ibb.co/GBXqMgZ/06061-EEE-B9-DA-4-F21-BA10-58-F60-D30-F624-1-105-c.jpg",
  ],
  heroImages: [
    "https://i.ibb.co/VcqZp0Kj/C6-F8-F0-DB-685-C-4312-A9-CA-E4-ACBB16-C3-E0-1-105-c.jpg",
    "https://i.ibb.co/35mBDVGm/43331963-D9-A6-402-C-9640-4-F4847-D48778-1-201-a.jpg",
    "https://i.ibb.co/zhH9tHjN/1-F74-AD22-D949-4-CC6-BA54-723-B3-FB5-CF67-1-105-c.jpg",
  ],
  ending: {
    thankYou: "Thank you for being part of our story.",
    finalLine: "We can't wait to celebrate with you.",
    image: "https://i.ibb.co/YTyHwwtZ/65-C569-E0-0250-4252-A8-DC-911906-F3-EA74-1-102-a.jpg",
  },
};
