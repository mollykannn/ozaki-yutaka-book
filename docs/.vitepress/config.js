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
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/icon-192x192.png",
        type: "image/png",
        size: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/icon-32x32.png",
        type: "image/png",
        size: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/icon-16x16.png",
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
  ],
  dest: "dist",
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      { text: "前言", link: "/" },
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
