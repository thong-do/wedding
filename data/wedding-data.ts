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
    bride: {
      label: string;
      name: string;
      address: string;
      googleMapsUrl: string;
      embedUrl: string;
      notes?: string;
    };
    groom: {
      label: string;
      name: string;
      address: string;
      googleMapsUrl: string;
      embedUrl: string;
      notes?: string;
    };
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
    ceremonyTime: "7:00",
    receptionTime: "10:00",
    dressCode: "Trang phục lịch sự",
    // notes: "Ăn trưa và tiệc tiếp theo",
  },
  timeline: [
    { time: "7:00", title: "Đón dâu và làm lễ tại nhà gái" },
    { time: "10:00", title: "Về làm lễ tại nhà trai" },
    { time: "10:30", title: "Ăn tiệc" },
    { time: "11:30", title: "Chụp ảnh" },
  ],
  venue: {
    bride: {
      label: "Nhà gái",
      name: "Bắc Ninh",
      address: "Số nhà 79 làn 2 đường Thiên Đức phường Kinh Bắc, tỉnh Bắc Ninh",
      googleMapsUrl: "https://maps.app.goo.gl/j3X3ctoRdDovUFwY9",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.030583853484!2d106.05028607544328!3d21.19094398049923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzI3LjQiTiAxMDbCsDAzJzEwLjMiRQ!5e0!3m2!1svi!2s!4v1773807220953!5m2!1svi!2s",
      notes: "Có chỗ đậu xe. Vào cổng chính.",
    },
    groom: {
      label: "Nhà trai",
      name: "Hà Nội",
      address: "Nhà văn hoá thôn Phú Mỹ, thôn Phú Mỹ, xã Kiều Phú, Hà Nội",
      googleMapsUrl: "https://maps.app.goo.gl/iKXrngru3EJx1hzd8",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1081.6607707404046!2d105.62506169375344!3d20.986188516916233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134510055625b63%3A0xbb3bbea8b8b8746d!2zTmjDoCBWxINuIEjDs2EgVGjDtG4gUGjDuiBN4bu5!5e0!3m2!1svi!2s!4v1773806676251!5m2!1svi!2s",
      notes: "Có chỗ đậu xe. Vào cổng chính.",
    },
  },
  story: {
    intro: "TODO: Câu chuyện của chúng tôi",
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
    thankYou: "Cảm ơn đã đến dự lễ cưới của chúng tôi.",
    finalLine: "Hẹn gặp lại ở nhà gái và nhà trai.",
    image: "https://i.ibb.co/YTyHwwtZ/65-C569-E0-0250-4252-A8-DC-911906-F3-EA74-1-102-a.jpg",
  },
};
