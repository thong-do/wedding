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
  labels: {
    openingLine: string;
    ceremonialInvite: string;
    heroCta: { details: string; location: string; rsvp: string };
    story: string;
    storySubtitle: string;
    gallery: string;
    gallerySubtitle: string;
    details: string;
    detailsSubtitle: string;
    timeline: string;
    timelineSubtitle: string;
    venue: string;
    venueSubtitle: string;
    rsvp: string;
    rsvpSubtitle: string;
    rsvpPrompt: string;
    rsvpSuccess: string;
    rsvpSuccessSubtitle: string;
    emotionalHighlight: string;
    mapLink: string;
  };
  hero: {
    tagline: string;
    cta: { details: string; location: string; rsvp: string };
  };
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
      image?: string;
    };
    groom: {
      label: string;
      name: string;
      address: string;
      googleMapsUrl: string;
      embedUrl: string;
      notes?: string;
      image?: string;
    };
  };
  sectionImages?: {
    details?: string;
    timeline?: string;
    rsvp?: string;
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
  emotionalHighlightImage?: string;
}

export const weddingData: WeddingData = {
  couple: {
    bride: "Phương Anh",
    groom: "Minh Thông",
    tagline: "A love story in motion",
  },
  date: "18/04/2026",
  labels: {
    openingLine: "Chúng mình rất vui khi được mời bạn đến ngày đặc biệt này.",
    ceremonialInvite: "Trân trọng kính mời",
    heroCta: {
      details: "Xem ngày đặc biệt",
      location: "Nơi gặp bạn",
      rsvp: "Xác nhận tham dự",
    },
    story: "Chúng mình gặp nhau",
    storySubtitle: "Một chút câu chuyện của hai đứa",
    gallery: "Kỷ niệm",
    gallerySubtitle: "Những khoảnh khắc chúng mình muốn giữ mãi",
    details: "Ngày đặc biệt của chúng mình",
    detailsSubtitle: "Rất mong được đón bạn",
    timeline: "Một ngày bên nhau",
    timelineSubtitle: "Từ sáng đến tối, cùng nhau",
    venue: "Nơi chúng mình gặp bạn",
    venueSubtitle: "Nhà gái và nhà trai — nơi chúng mình lớn lên",
    rsvp: "Xác nhận tham dự cùng chúng mình",
    rsvpSubtitle: "Dù có hay không thể đến, chúng mình đều rất muốn biết.",
    rsvpPrompt: "Cho chúng mình biết bạn có thể đến nhé",
    rsvpSuccess: "Cảm ơn bạn!",
    rsvpSuccessSubtitle: "Hẹn gặp bạn trong ngày vui của chúng mình.",
    emotionalHighlight: "Mãi bên nhau",
    mapLink: "Xem chỉ đường",
  },
  hero: {
    tagline: "Một câu chuyện tình yêu đang viết tiếp",
    cta: { details: "Xem ngày đặc biệt", location: "Nơi gặp bạn", rsvp: "Xác nhận tham dự" },
  },
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
      // notes: "Có chỗ đậu xe. Vào cổng chính.",
      // image: "https://i.ibb.co/1fpy7k1v/9-A67-D834-7-E07-4389-AE70-5-BF2-B155098-A-1-105-c.jpg",
    },
    groom: {
      label: "Nhà trai",
      name: "Hà Nội",
      address: "Nhà văn hoá thôn Phú Mỹ, thôn Phú Mỹ, xã Kiều Phú, Hà Nội",
      googleMapsUrl: "https://maps.app.goo.gl/iKXrngru3EJx1hzd8",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1081.6607707404046!2d105.62506169375344!3d20.986188516916233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134510055625b63%3A0xbb3bbea8b8b8746d!2zTmjDoCBWxINuIEjDs2EgVGjDtG4gUGjDuiBN4bu5!5e0!3m2!1svi!2s!4v1773806676251!5m2!1svi!2s",
      // notes: "Có chỗ đậu xe. Vào cổng chính.",
      // image: "https://i.ibb.co/rKpjpGsx/9-BBD6-B37-690-D-433-F-8964-AF88165-A0532-1-105-c.jpg",
    },
  },
  sectionImages: {
    details: "https://i.ibb.co/LKwdXrd/1-CFD429-B-952-D-4-B35-9706-E9-BEAFFEDB33-1-102-a.jpg",
    timeline: "https://i.ibb.co/60558Cwg/EDB1816-F-4-B78-4929-9-CB8-FCC74-F5-E4-A12-1-105-c.jpg",
    rsvp: "https://i.ibb.co/YTyHwwtZ/65-C569-E0-0250-4252-A8-DC-911906-F3-EA74-1-102-a.jpg",
  },
  story: {
    intro: "Không biết bắt đầu từ đâu — có lẽ từ một ngày bình thường, một câu chào, một nụ cười. Rồi dần dần, hai đứa nhận ra mình không muốn rời xa nhau nữa. Hôm nay, chúng mình muốn mời bạn cùng chứng kiến ngày chúng mình chính thức trở thành gia đình.",
    images: [
      "https://i.ibb.co/kCVXN24/3-DA6-E9-CB-0572-42-B6-9-CAE-08386-A1-A0674-1-105-c.jpg",
      "https://i.ibb.co/7JMGM1Zg/358-D56-CE-0-E41-45-BE-9-FB2-611-D1-B688553-1-105-c.jpg",
      "https://i.ibb.co/13F1VcJ/252-A3514-8-F65-4-CD0-BD13-0-AD4-DBF3-CC6-F-1-105-c.jpg",
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
    "https://i.ibb.co/QWmX2fQ/DF724-C54-3496-436-B-98-D7-374-EB53-FF340-1-102-a.jpg",
    "https://i.ibb.co/35mBDVGm/43331963-D9-A6-402-C-9640-4-F4847-D48778-1-201-a.jpg",
  ],
  ending: {
    thankYou: "Cảm ơn vì đã ở đây cùng chúng mình.",
    finalLine: "Hẹn gặp bạn ở nhà gái và nhà trai — nơi câu chuyện của chúng mình bắt đầu.",
    image: "https://i.ibb.co/N2t3ZS8N/16-BED593-0-EDD-468-C-B643-2-BE71202014-F-1-102-a.jpg",
  },
  emotionalHighlightImage: "https://i.ibb.co/35mBDVGm/43331963-D9-A6-402-C-9640-4-F4847-D48778-1-201-a.jpg",
};
