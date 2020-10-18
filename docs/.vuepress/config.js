module.exports = {
  title: "尾崎豐傳說",
  description: "",
  base: "/ozaki-yutaka-book/",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
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
              ["/Live/19851115", "11/15 - 代代木OLYMPIC"],
              ["/Live/19851127", "11/27 - 釧路市民文化會館"],
            ],
          },
          {
            title: "1991",
            collapsable: false,
            children: [
              ["/Live/1991-TheDay", "The Day"],
              [
                "/Live/19911030-TheDayLastAppearance",
                "10/30 - THE DAY LAST APPEARANCE",
              ],
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
