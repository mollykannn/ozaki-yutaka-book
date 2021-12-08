module.exports = {
  title: "尾崎豐傳說",
  description: "尾崎豐傳說",
  base: "/ozaki-yutaka-book/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover",
      },
    ],
    [
      "link",
      { rel: "icon", href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/favicon.ico", type: "image/ico" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/apple-touch-icon.png",
        rel: "apple-touch-icon",
        size: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/android-chrome-192x192.png",
        type: "image/png",
        size: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/android-chrome-32x32.png",
        type: "image/png",
        size: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/android-chrome-16x16.png",
        type: "image/png",
        size: "16x16",
      },
    ],
    ["meta", { property: "og:title", content: "尾崎豐傳說" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:description", content: "尾崎豐傳說" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://mollykannn.github.io/ozaki-yutaka-book/",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/og-image.jpg",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:title", content: "尾崎豐傳說" }],
    ["meta", { property: "twitter:creator", content: "@MollyKannn" }],
    [
      "meta",
      {
        property: "twitter:image",
        content:
          "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/og-image.jpg",
      },
    ],
    ["meta", { name: "theme-color", content: "#000" }],
    ["link", {
      rel: "manifest",
      href: "https://mollykannn.github.io/ozaki-yutaka-book/manifest.webmanifest",
    },],
    ["script", { src: "https://mollykannn.github.io/ozaki-yutaka-book/registerSW.js" }],
  ],
  dest: "dist",
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      { text: "前言", link: "/" },
      { text: "專輯中譯歌詞", 
        link: "/Album/index",
        children: [
          { text: "1. 十七歳の地図", link: "/Album/index#十七歳の地図-01-12-1983" },
          { text: "2. 回帰線", link: "/Album/index#回帰線-21-03-1985" },
          { text: "3. 壊れた扉から", link: "/Album/index#壊れた扉から-28-11-1985" },
          { text: "4. 街路樹", link: "/Album/index#街路樹-01-09-1988" },
          { text: "5. 誕生", link: "/Album/index#誕生-21-11-1990" },
          { text: "6. 放熱への証", link: "/Album/index#放熱への証-10-05-1992" },
        ]
      },
      {
        text: "演唱會",
        collapsable: false,
        children: [
          {
            text: "1985",
            collapsable: false,
            children: [
              { text: "08/25 - 大阪球場", link: "/Live/19850825" },
              { text: "11/05 - 浜松市民会館", link: "/Live/19851105" },
              { text: "11/15 - 代々木体育館", link: "/Live/19851115" },
              { text: "11/27 - 釧路市民文化會館", link: "/Live/19851127" },
            ],
          },
          {
            text: "1991",
            collapsable: false,
            children: [
              { text: "10/02-03 - 大阪城ホール", link: "/Live/19911002" },
              { text: "10/30 - 代々木体育館", link: "/Live/19911030" },
            ],
          },
        ],
      },
      {
        text: "語錄",
        collapsable: false,
        children: [
          { text: "十代語錄", link: "/Quotation/teenager" },
          { text: "紐約獨白", link: "/Quotation/newYork" },
        ],
      },
    ],
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link: "https://github.com/mollykannn/ozaki-yutaka-book",
      },
    ],
  },
  locales: {
    "/": {
      lang: "zh-Hant",
    },
  },
};
