export interface GalleryItem {
  id: number;
  title: string;
  albumKey: string;
  albumTitle: string;
  category: string;
  image: string;
  width: number;
  height: number;
  aspectRatio: number;
  caption: string;
  rawUrl?: string;
}

export interface AlbumMeta {
  key: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  photoCount: number;
  coverImage: string;
  description: string;
}

export const ALBUMS: AlbumMeta[] = [
  {
    key: 'clash_of_prompt',
    title: 'Clash of Prompt',
    subtitle: 'AI Prompt Battle & GenAI Showdown',
    category: 'Prompt Battle',
    date: 'Even Sem 2026',
    photoCount: 4,
    coverImage: '/assets/gallery/clash_of_prompt/photo_01.webp',
    description:
      'High-octane prompt craft competition challenging participants to push multimodal LLMs, prompt chaining, and AI benchmark boundaries.',
  },
  {
    key: 'analytrix_datathon',
    title: 'Analytrix: Datathon',
    subtitle: '24-Hour Intensive Data Science Sprint',
    category: 'Datathon',
    date: 'Even Sem 2026',
    photoCount: 4,
    coverImage: '/assets/gallery/analytrix_datathon/photo_05.webp',
    description:
      'Student data scientists engineering predictive models, neural networks, and scalable pipelines against real-world complex datasets.',
  },
  {
    key: 'analytrix_dataconclave',
    title: 'Analytrix: Data Conclave',
    subtitle: 'Industry Keynotes & Research Symposium',
    category: 'Conclave',
    date: 'Even Sem 2026',
    photoCount: 5,
    coverImage: '/assets/gallery/analytrix_dataconclave/photo_02.webp',
    description:
      'Distinguished faculty, corporate AI leaders, and researchers convening for panels on enterprise intelligence and machine learning horizons.',
  },
  {
    key: 'zephyr_day1',
    title: 'Zephyr 2026 - Day 1',
    subtitle: 'Inauguration & Tech Showcase',
    category: 'Zephyr',
    date: 'Day 1',
    photoCount: 4,
    coverImage: '/assets/gallery/zephyr_day1/photo_04.webp',
    description:
      'The opening procession, live fest moments, student hosts, and a glimpse of the immersive activities.',
  },
  {
    key: 'zephyr_day2',
    title: 'Zephyr 2026 - Day 2',
    subtitle: 'Competitions & Campus Celebrations',
    category: 'Zephyr',
    date: 'Day 2',
    photoCount: 4,
    coverImage: '/assets/gallery/zephyr_day2/photo_05.webp',
    description:
      'A lively day of box cricket, neon bowling, and campus energy.',
  },
  {
    key: 'zephyr_day3',
    title: 'Zephyr 2026 - Day 3',
    subtitle: 'Grand Finale & Award Ceremony',
    category: 'Zephyr',
    date: 'Day 3',
    photoCount: 4,
    coverImage: '/assets/gallery/zephyr_day3/photo_06.webp',
    description:
      'A final day of interactive games and standout Takeshi Castle moments.',
  },
];

  {
    id: 1,
    title: 'Clash of Prompt - #01',
    albumKey: 'clash_of_prompt',
    albumTitle: 'Clash of Prompt',
    category: 'Prompt Battle',
    image: '/assets/gallery/clash_of_prompt/photo_01.webp',
    width: 1400,
    height: 788,
    aspectRatio: 1.777,
    caption: 'The S4DS team at the Clash of Prompt event',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMFS_3LWC9UAjGSOGEoIayFCqjEHbBEF7khG48nlo3hIsU-Bwj2mKIbrY0kGxCn2tvkoigbcYl0EfqBjF1nCpp1nUHvl4Sca53Ph7Cbm5EKg-Yqx2DK',
  },
  {
    id: 2,
    title: 'Clash of Prompt - #02',
    albumKey: 'clash_of_prompt',
    albumTitle: 'Clash of Prompt',
    category: 'Prompt Battle',
    image: '/assets/gallery/clash_of_prompt/photo_02.webp',
    width: 1400,
    height: 788,
    aspectRatio: 1.777,
    caption: 'Participants gather and discuss the competition',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczNzJmDkg5RGmFD9gct_lKYZ8NkEY9RdW7Zp1EeMLTzUMJ2XvgkXkuI--G5sKjoaP9dimrOrLGLNRCSXoaNFHqPZ0jk4QGPZC-e9wNAZ1ridYFSGm_Jy',
  },
  {
    id: 4,
    title: 'Clash of Prompt - #04',
    albumKey: 'clash_of_prompt',
    albumTitle: 'Clash of Prompt',
    category: 'Prompt Battle',
    image: '/assets/gallery/clash_of_prompt/photo_04.webp',
    width: 1400,
    height: 788,
    aspectRatio: 1.777,
    caption: 'Two competitors collaborate over a laptop',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczP2T7eObQ-QNrsAXG6wwhKMMKEXlvls1y3b2nKA5wH18fJ-0kLUYmXTbTvwdBanppQzcYcJkssq0ipuV0nPuf38wPTVk90fpuqGqmdCiihwThfhS6Jc',
  },
  {
    id: 6,
    title: 'Clash of Prompt - #06',
    albumKey: 'clash_of_prompt',
    albumTitle: 'Clash of Prompt',
    category: 'Prompt Battle',
    image: '/assets/gallery/clash_of_prompt/photo_06.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'A participant works through a live computer challenge',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczOQ9mHXGVKbjp3n-XmjEJqVFFj53QEt-DRTjeWZ4sIGreH9q1KqgKFoTFfRBlXdcRVMefA2H54Z_drSQy4NgEol0vqbkR73zVzO9lC727X--0CDJuGI',
  },
  {
    id: 9,
    title: 'Analytrix Datathon - #01',
    albumKey: 'analytrix_datathon',
    albumTitle: 'Analytrix Datathon',
    category: 'Datathon',
    image: '/assets/gallery/analytrix_datathon/photo_01.webp',
    width: 1400,
    height: 2100,
    aspectRatio: 0.667,
    caption: 'A speaker opens the Analytrix Datathon',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczOhvtkbMZDaqBOUUIS_weDxsiQzriLBd_ZhEfcsOzVoWkav3J9vhXFWw0_WPXW3W-Z6-TUYrpIrU_hCgiHXIPRmn0m15tvBPNSSzxyXJyzvPnvewlY',
  },
  {
    id: 11,
    title: 'Analytrix Datathon - #03',
    albumKey: 'analytrix_datathon',
    albumTitle: 'Analytrix Datathon',
    category: 'Datathon',
    image: '/assets/gallery/analytrix_datathon/photo_03.webp',
    width: 1400,
    height: 2096,
    aspectRatio: 0.668,
    caption: 'A speaker addresses the Datathon audience',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczPEIekJ6YrZYTjP24faREWQ8cG9e2fVTNCUFCgQufevYQtJxaaeoMVzy8oXXCT-QtY6E0fWuUVZ_CC9xdwssn1BqQFdYreM4nJ3xYoutPvu2OOBT8w',
  },
  {
    id: 13,
    title: 'Analytrix Datathon - #05',
    albumKey: 'analytrix_datathon',
    albumTitle: 'Analytrix Datathon',
    category: 'Datathon',
    image: '/assets/gallery/analytrix_datathon/photo_05.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'The event group gathers in front of the Analytrix display',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczPZB1n2H1sbqElUIY8MZavNFzhkq39UW_hAd8G9ivbCtLUr-wP2TdqxGOOvSFq5k_xA5td6VXuHKr6vy7ZiKk8IY4EaGRRivmC4_CIr0Y0bTLviJ-Y',
  },
  {
    id: 14,
    title: 'Analytrix Datathon - #06',
    albumKey: 'analytrix_datathon',
    albumTitle: 'Analytrix Datathon',
    category: 'Datathon',
    image: '/assets/gallery/analytrix_datathon/photo_06.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'Participants work together at the computers',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMu_Eyp13wl7U22YePVCEyvhl4kNhXV5Jju1fr1qWaumhr1zK3WoMUYkAKPkGmdB6uFG4mBhJ7RkwG8IEPeYGD9v6IK-IY0LYHEquJqPi2nKDop6ug',
  },
  {
    id: 17,
    title: 'Analytrix Data Conclave - #01',
    albumKey: 'analytrix_dataconclave',
    albumTitle: 'Analytrix Data Conclave',
    category: 'Conclave',
    image: '/assets/gallery/analytrix_dataconclave/photo_01.webp',
    width: 1400,
    height: 2100,
    aspectRatio: 0.667,
    caption: 'An audience member joins the discussion with a question',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczOXKL2hyKyzIaCd17ZKOkF5YFFY4CGGPZX_QQy9LbeeXH69BaY1FManuIMZ2i0qf48hj_PwTn8DxABUhCS3BBW8d8-y7fYbtxDS8jd1sORKmtwtsMsF',
  },
  {
    id: 18,
    title: 'Analytrix Data Conclave - #02',
    albumKey: 'analytrix_dataconclave',
    albumTitle: 'Analytrix Data Conclave',
    category: 'Conclave',
    image: '/assets/gallery/analytrix_dataconclave/photo_02.webp',
    width: 1400,
    height: 935,
    aspectRatio: 1.497,
    caption: 'A guest speaks from the podium',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMIdaOKzWhw4YRA1NTh9r9QVuuMElsf_56KTXPSxg9xWmmCAfEy2QMzQhKRc8ymPKz90gQMarQQWS0QbNHz-pry9WcLVhXZYOvJhq9MM2U3Kx50flJB',
  },
  {
    id: 19,
    title: 'Analytrix Data Conclave - #03',
    albumKey: 'analytrix_dataconclave',
    albumTitle: 'Analytrix Data Conclave',
    category: 'Conclave',
    image: '/assets/gallery/analytrix_dataconclave/photo_03.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'A speaker addresses the Data Conclave audience',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMPxWg5E8MjXSlXgpRb_eB4G3DNhzdGakkC7V5daAEG6oAd8DMpBzs4kT_OSxnTcGotFnEa4atj05eU5uK9fmT9rnA2yKU-no4JA9GlTcsUuxOMbcoW',
  },
  {
    id: 20,
    title: 'Analytrix Data Conclave - #04',
    albumKey: 'analytrix_dataconclave',
    albumTitle: 'Analytrix Data Conclave',
    category: 'Conclave',
    image: '/assets/gallery/analytrix_dataconclave/photo_04.webp',
    width: 1400,
    height: 2100,
    aspectRatio: 0.667,
    caption: 'A speaker presents from the stage',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczM35WA2bYkX04aQQutZVKedn1BagPcKnhyresTjxHmBQFYErJQil9WNCTZ-y2VFAp6-89LPuACNiLA_YJbzKVUNiHOK17mT-FMRvtMYGZQsgMAKF5fu',
  },
  {
    id: 22,
    title: 'Analytrix Data Conclave - #06',
    albumKey: 'analytrix_dataconclave',
    albumTitle: 'Analytrix Data Conclave',
    category: 'Conclave',
    image: '/assets/gallery/analytrix_dataconclave/photo_06.webp',
    width: 1400,
    height: 935,
    aspectRatio: 1.497,
    caption: 'Students and faculty gather with certificates',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczOKd2FCbZYDih-F3l1pAiCR8y46FBM8G0m_MlNe5eaISNXw1kDeTQlWgTC9SE1d7TVGziT0rwbEpTg7yVKuGfjqC90gtQVFCRa6gUbmQRFvHM5nM4-G',
  },
  {
    id: 25,
    title: 'Zephyr 2026 - Day 1 - #01',
    albumKey: 'zephyr_day1',
    albumTitle: 'Zephyr 2026 - Day 1',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day1/photo_01.webp',
    width: 1400,
    height: 2100,
    aspectRatio: 0.667,
    caption: 'Faculty and guests attend the Zephyr opening',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczPWWfvA_qAQG2bCWVNdi5JgLcbUFXddYOOVOV0Eae3G1lGb9nx6q57aPmWR-2mMrw-CB4iHhoUdkZKYsiysLfj2zu_MeLpADg4TLLIdx0GOLRdyETaE',
  },
  {
    id: 27,
    title: 'Zephyr 2026 - Day 1 - #03',
    albumKey: 'zephyr_day1',
    albumTitle: 'Zephyr 2026 - Day 1',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day1/photo_03.webp',
    width: 1400,
    height: 2100,
    aspectRatio: 0.667,
    caption: 'A participant takes on a lively fest challenge',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczOhzGL2IthW73uZiwujzePE5faf20mtQRjyMEVlSXFS9rWdCBniGC-voufX5pQnqvUOxViyeS36wTzXAr-9sO6pgWS9gP0THvltGYL98Uf2hS1-fM08',
  },
  {
    id: 28,
    title: 'Zephyr 2026 - Day 1 - #04',
    albumKey: 'zephyr_day1',
    albumTitle: 'Zephyr 2026 - Day 1',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day1/photo_04.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'Student hosts pose in the fest atrium',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczNJruel_MN4ldpw4ZeKHyZTjb4iTV4cQOz0i-HICdCRkXNvXMLmop6RVY1w-_pkWGuO6_Wo9qcNrFlWfQCoPs3PWPsPNx953H7bzCc986ur8Cuj7aVG',
  },
  {
    id: 30,
    title: 'Zephyr 2026 - Day 1 - #06',
    albumKey: 'zephyr_day1',
    albumTitle: 'Zephyr 2026 - Day 1',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day1/photo_06.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'A participant takes part in a neon-lit fest activity',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczM22Uh9-9t2wh_qARfHkvIhdVmJCiJOtIz12wkIegtOeDxBpiz6Na6gWFE4onxfj29x2zYwm9e92d_CKKAM5szECZeSZmcKtTqgHM7yWKn7mtAK-VBH',
  },
  {
    id: 33,
    title: 'Zephyr 2026 - Day 2 - #01',
    albumKey: 'zephyr_day2',
    albumTitle: 'Zephyr 2026 - Day 2',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day2/photo_01.webp',
    width: 1400,
    height: 1867,
    aspectRatio: 0.75,
    caption: 'Box cricket action at Zephyr',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczNz2vFFaq5GeNbA-4hoZE_YgZYYNIU_TAYO5NeZG3bMrIEyJOX6YoVs1isBeQaX_ryqA46HihYVV20Ma2ZYQm1FWXz37zfWbByR1RL-0UgY8mfndXv7',
  },
  {
    id: 35,
    title: 'Zephyr 2026 - Day 2 - #03',
    albumKey: 'zephyr_day2',
    albumTitle: 'Zephyr 2026 - Day 2',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day2/photo_03.webp',
    width: 1400,
    height: 1867,
    aspectRatio: 0.75,
    caption: 'Neon bowling under the arena lights',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMrtFiiNX9_Qm4xEIRr6no6g3shV9TdYoLCvwYuhZxonpenvmS4jFC2zhiy1ZXbjYfl4wJMIntLMNCg9GtrngNHq8K2rziUAG82O-w3peHLPHvmvBXw',
  },
  {
    id: 36,
    title: 'Zephyr 2026 - Day 2 - #04',
    albumKey: 'zephyr_day2',
    albumTitle: 'Zephyr 2026 - Day 2',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day2/photo_04.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'Attendees gather around the Zephyr activities',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMWpGlzMfAYim9yIL5fiNphqM6kx2FNF4rKpDvFK0He-QMN3zxnz55rw-0sweO-fn-q7jRd8h7Q7qd5nssZZF6eN70mcejstJF50EHWVRPRhNYiyN-D',
  },
  {
    id: 37,
    title: 'Zephyr 2026 - Day 2 - #05',
    albumKey: 'zephyr_day2',
    albumTitle: 'Zephyr 2026 - Day 2',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day2/photo_05.webp',
    width: 1400,
    height: 934,
    aspectRatio: 1.499,
    caption: 'A bright crowd moment from Zephyr Day 2',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczOR-oAcbSxDyuzepaCjNWaCtL06VJO43wuPV-ZjZhpEL6R15WpcQSxVqn5WiBNKlkcJ370Lmovtwc4vvTmkX_7KV1-CsKVVBqyxc8W_81fJf-_OqNIN',
  },
  {
    id: 41,
    title: 'Zephyr 2026 - Day 3 - #01',
    albumKey: 'zephyr_day3',
    albumTitle: 'Zephyr 2026 - Day 3',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day3/photo_01.webp',
    width: 1400,
    height: 1050,
    aspectRatio: 1.333,
    caption: 'Participants at the Takeshi Castle game setup',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczP_uQBZm540Z8SWPo0MS4Lxau24Svfgr7D8rxzD1VWXuoFNa14ENvsAfsManDDrfsIubfJykubcjQQxQI7JHyLPyNtJNpll-cQUCl6gpWUCLPXPjZLV',
  },
  {
    id: 43,
    title: 'Zephyr 2026 - Day 3 - #03',
    albumKey: 'zephyr_day3',
    albumTitle: 'Zephyr 2026 - Day 3',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day3/photo_03.webp',
    width: 1400,
    height: 1050,
    aspectRatio: 1.333,
    caption: 'Teams take on an indoor group challenge',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczPNQkWH-XJxx52POUr-1sHQ8MkhiIeu5buXG_3RpxeCs9-zHtZ_jE2QbMjAh-eGAv2POGhd_J-XauMBkb0t71zaP2p2xNRlb84Q_fTNrqmfIMnnp_8T',
  },
  {
    id: 45,
    title: 'Zephyr 2026 - Day 3 - #05',
    albumKey: 'zephyr_day3',
    albumTitle: 'Zephyr 2026 - Day 3',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day3/photo_05.webp',
    width: 1400,
    height: 1050,
    aspectRatio: 1.333,
    caption: 'A participant takes on the strength challenge',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczMROz10BlyrR3cqmuciDzRMeqj_jU0lgd9RegUFpR8JD_dw2EMzCuVhPNPCzQzK1hzUYivqUkydcruVIrofb-W8Yt0nyf8CBp2RohXDMRdXb_Rv9zzX',
  },
  {
    id: 46,
    title: 'Zephyr 2026 - Day 3 - #06',
    albumKey: 'zephyr_day3',
    albumTitle: 'Zephyr 2026 - Day 3',
    category: 'Zephyr',
    image: '/assets/gallery/zephyr_day3/photo_06.webp',
    width: 1400,
    height: 1050,
    aspectRatio: 1.333,
    caption: 'A group gathers around an indoor fest activity',
    rawUrl:
      'https://lh3.googleusercontent.com/pw/AP1GczNTBV13qeT9Ujfz2OwMH4Wxj5yDx8ZtTZFWoeMAIJ5vV0NGTdaDGm5VPWv6pqLJ5RywX0nMbd0PRz-ufdpPTrekAlpIhYC98W0i1tE7uX2eqJyw9e8W',
  },
];
