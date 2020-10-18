module.exports = {
  title: "尾崎豐傳說",
  description: "尾崎豐傳說",
  base: "/ozaki-yutaka-book/",
  head: [
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" },],
    ["link", { rel: 'icon', href: "images/icons/favicon.ico", type: "image/ico" },],
    ["link", { rel: 'apple-touch-icon', href: "images/icons/apple-touch-icon.png", rel: "apple-touch-icon", size: "180x180" },],
    ["link", { rel: 'icon', href: "images/icons/icon-192x192.png", type: "image/png", size: "192x192" },],
    ["link", { rel: 'icon', href: "images/icons/icon-32x32.png", type: "image/png", size: "32x32" },],
    ["link", { rel: 'icon', href: "images/icons/icon-16x16.png", type: "image/png", size: "16x16" },],
    ["meta", { property: "og:title", content: "尾崎豐傳說" },],
    ["meta", { property: "og:type", content: "website" },],
    ["meta", { property: "og:description", content: "尾崎豐傳說" },],
    ["meta", { property: "og:url", content: "https://mollykannn.github.io/ozaki-yutaka-book/" },],
    ["meta", { property: "og:image", content: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/og-image.jpg" },],
    ["meta", { property: "twitter:card", content: "summary_large_image" },],
    ["meta", { property: "twitter:title", content: "尾崎豐傳說" },],
    ["meta", { property: "twitter:creator", content: "@MollyKannn" },],
    ["meta", { property: "twitter:image", content: "https://mollykannn.github.io/ozaki-yutaka-book/images/icons/og-image.jpg" },],
    ["meta", { name: "theme-color", content: "#000" }],
  ],
  dest: "dist",
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ["/", "前言"],
      {
        title: "傳說",
        collapsable: false,
        children: [
          "/Life/1966-1977",
          "/Life/1978-1980",
          "/Life/1981-1983",
          "/Life/1984",
          "/Life/1985",
          "/Life/1986",
          "/Life/1987-1989",
          "/Life/1990-1991",
          "/Life/1992",
        ],
      },
      {
        title: "演唱會",
        collapsable: false,
        children: [
          {
            title: "1985",
            collapsable: false,
            children: [
              ["/Live/19850825", "08/25 - 大阪球場"],
              ["/Live/19851105", "11/05 - 浜松市民会館"],
              ["/Live/19851115", "11/15 - 代々木体育館"],
              ["/Live/19851127", "11/27 - 釧路市民文化會館"],
            ],
          },
          {
            title: "1991",
            collapsable: false,
            children: [
              ["/Live/19911002", "10/02-03 - 大阪城ホール"],
              ["/Live/19911030", "10/30 - 代々木体育館"],
            ],
          },
        ],
      },
      {
        title: "語錄",
        collapsable: false,
        children: ["/Quotation/teenager", "/Quotation/newYork"],
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
