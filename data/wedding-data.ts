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
    /** Small line above the large month title (e.g. calendar section) */
    calendar: string;
    /** Large script-style month title, e.g. “Tháng 4” */
    calendarMonthTitle: string;
    /** Caption under the grid for the highlighted day */
    calendarCaption: string;
    /** Shown under the RSVP submit button */
    rsvpSubmitHint: string;
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
      /** Optional; embed is hidden on the site — link uses `googleMapsUrl` */
      embedUrl?: string;
      notes?: string;
      image?: string;
    };
    groom: {
      label: string;
      name: string;
      address: string;
      googleMapsUrl: string;
      embedUrl?: string;
      notes?: string;
      image?: string;
    };
  };
  sectionImages?: {
    details?: string;
    timeline?: string;
    rsvp?: string;
    /** Full-bleed background for the wedding calendar section; falls back to hero/emotional images */
    calendar?: string;
  };
  /** Drives the calendar grid; weekday labels are fixed (MON–SUN) in the component */
  calendar: {
    /** ISO `YYYY-MM-DD` — must match the highlighted cell */
    weddingDateIso: string;
    /** Two portrait photos shown under the schedule cards in the calendar section */
    detailImages?: [string, string];
  };
  story: {
    intro: string;
    images: string[];
  };
  /** 1–3 photos for the timeline collage (same layout as `story.images`). */
  timelineImages?: string[];
  gallery: string[];
  heroImages: string[];
  ending: {
    thankYou: string;
    finalLine: string;
    image?: string;
  };
  emotionalHighlightImage?: string;
  /**
   * Nhạc nền — file MP3 trong `public/music/`, khai báo `src` (vd. `/music/manbu-xianggang-1999.mp3`).
   */
  backgroundMusic?: {
    /** Tên bài (aria-label, accessibility) */
    title?: string;
    src: string;
    /** Âm lượng 0–1 */
    volume?: number;
  };
}

export const weddingData: WeddingData = {
  couple: {
    bride: "Phương Anh",
    groom: "Minh Thông",
    tagline: "A love story in motion",
  },
  date: "26/04/2026",
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
    mapLink: "Chỉ đường",
    calendar: "Ngày chúng mình chọn",
    calendarMonthTitle: "Tháng 4",
    calendarCaption: "Ngày cưới",
    rsvpSubmitHint:
      "Thông tin được lưu vào Google Sheet của hai đứa — chỉ cần gửi một lần.",
  },
  hero: {
    tagline: "Một câu chuyện tình yêu đang viết tiếp",
    cta: { details: "Xem ngày đặc biệt", location: "Nơi gặp bạn", rsvp: "Xác nhận tham dự" },
  },
  schedule: {
    ceremonyTime: "12:45",
    receptionTime: "15:30",
    dressCode: "16:30",
    // notes: "Ăn trưa và tiệc tiếp theo",
  },
  timeline: [
    { time: "11:10", title: "Bắt đầu đi đón dâu" },
    { time: "12:45", title: "Làm lễ tại nhà gái" },
    { time: "13:45", title: "Di chuyển về nhà trai" },
    { time: "15:30", title: "Làm lễ tại nhà trai" },
    { time: "16:30", title: "Ăn tiệc" },
    { time: "18:30", title: "Giao lưu, chụp ảnh" },
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
    details: "/images/C1BAFE96-38CD-48A1-B860-909A9898D3B9_1_105_c.jpeg",
    rsvp: "/images/A827539B-8C8A-4C9A-ADE4-5FB34763B67A_1_105_c.jpeg",
    calendar: "/images/623BEDE9-C52E-41B1-AB17-57EC80F4DD98_1_105_c.jpeg",
  },
  timelineImages: [
    "/images/66646CAD-AA90-4880-B0B2-11BE379541D1_1_105_c.jpeg",
    "/images/44F4CAF2-B5C5-45AF-8AED-E1FBBE6690FB_1_105_c.jpeg",
    "/images/AF05CD46-F50F-4097-8FD4-046D3326015D_1_105_c.jpeg",
  ],
  calendar: {
    weddingDateIso: "2026-04-26",
    detailImages: [
      "/images/9CA767CD-6164-4CF4-B3C9-ABDCC7AD7923_1_105_c.jpeg",
      "/images/C1BAFE96-38CD-48A1-B860-909A9898D3B9_1_105_c.jpeg",
    ],
  },
  story: {
    intro: "Không biết bắt đầu từ đâu — có lẽ từ một ngày bình thường, một câu chào, một nụ cười. Rồi dần dần, hai đứa nhận ra mình không muốn rời xa nhau nữa. Hôm nay, chúng mình muốn mời bạn cùng chứng kiến ngày chúng mình chính thức trở thành gia đình.",
    images: [
      "/images/837C4CEA-EB53-481F-B2C4-469430849821_1_105_c.jpeg",
      "/images/6FF664F9-16D8-48BE-993D-567687B3A7D9_1_105_c.jpeg",
      "/images/C89A38E0-C0E2-424F-B267-B33D064BA433_1_105_c.jpeg",
    ],
  },
  gallery: [
    "/images/B558A130-5870-4AC6-98D3-A77D21796242_1_105_c.jpeg",
    "/images/C34C39A7-260A-48B3-A9AF-1DBF1D8B3198.jpeg",
    "/images/DE2671AF-E436-4F21-B0B6-5167C0439D33.jpeg",
    "/images/47FA5865-4D78-42BA-A08A-0D17DBC83F95_1_105_c.jpeg",
    "/images/D262FF8B-AAE4-44FD-A285-15B835A8C506_1_105_c.jpeg",
    "/images/9D21C1F7-7E61-4BE1-9E24-35A7A24B25D5_1_105_c.jpeg",
    "/images/39EC43B2-188E-4AD1-8337-FF9FCF77DAA1.jpeg",
    "/images/8D48314D-327A-4815-877E-41C89C513D23_1_105_c.jpeg",
    "/images/CBB62FEA-E732-40ED-BBB6-0DCAD8DF7CED_1_105_c.jpeg",
    "/images/0B76B8C0-E1DA-4B0E-8052-463304AA7490_1_105_c.jpeg",
    "/images/4A0B8023-C09C-4E32-A6CD-64F015ECD4FA_1_105_c.jpeg",
  ],
  heroImages: [
    "/images/827D4A14-F627-414D-91E4-839B6F489C28_1_105_c.jpeg",
    "/images/8C22AD24-B6A1-4FCD-8634-7D5C2DDBEAFD_1_105_c.jpeg",
    "/images/79C37AE5-1BCD-40AB-8150-148CEED6ED4E_1_105_c.jpeg",
  ],
  ending: {
    thankYou: "Cảm ơn vì đã ở đây cùng chúng mình.",
    finalLine: "Hẹn gặp bạn ở nhà gái và nhà trai — nơi câu chuyện của chúng mình bắt đầu.",
    image: "/images/79B82376-97D1-49E4-A10A-8FD0B6AFAAD1_1_105_c.jpeg",
  },
   emotionalHighlightImage: "https://i.ibb.co/35mBDVGm/43331963-D9-A6-402-C-9640-4-F4847-D48778-1-201-a.jpg",
  backgroundMusic: {
    title: "漫步香港1999",
    src: "/music/manbu-xianggang-1999.mp3",
    volume: 0.45,
  },
};
