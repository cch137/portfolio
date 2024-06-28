const name = "cch137";

const repos: {
  repo: string;
  title?: string;
  description?: string;
  live?: string;
  tags?: (string | { label: string; url?: string; color?: string })[];
}[] = [
  {
    title: "CH4",
    repo: "ch4",
    description: "匯集各類應用的網站，其中包括 AI 聊天。",
    live: "https://cch137.link",
    tags: ["TS", "React", "Next", "MongoDB", "AI"],
  },
  {
    title: "CCH's API",
    repo: "cch137-api",
    description:
      "彙整各類功能的個人網站的 API 接口。採用自主研發的 jet 作為框架。",
    live: "https://api.cch137.link",
    tags: ["TS", "Node", "MongoDB"],
  },
  {
    title: "Jet",
    repo: "jet",
    description:
      "一個強力且輕量級的 Restful API 模組，能處理 http 和 ws 協議的路由器。",
    tags: ["TS", "Node", "NPM"],
  },
  {
    title: "文件互傳雲端",
    repo: "1122-linux-drive",
    description: "提供以鑰匙訪問的雲端硬碟空間，解決跨設備互傳文件的問題。",
    tags: ["TS", "Vue", "Nuxt", "Node"],
  },
  {
    title: "X Carrier",
    repo: "x-carrier",
    description: "一個簡單個人雲端硬碟。1122-linux-drive 的前身。",
    live: "https://drive.cch137.link",
    tags: ["TS", "Vue", "Nuxt", "Node"],
  },
  {
    title: "TS Utils",
    repo: "ts-utils",
    description: "個人工具程式模組。",
    tags: ["TS", "Node", "NPM"],
  },
  {
    title: "1121 PVZ",
    repo: "1121-cs-pvz",
    description: "以 pygame 重現植物大戰殭屍。1121 計概 Final Project。",
    tags: ["Python", "pygame"],
  },
  {
    repo: "tracking-server",
    description:
      "使用 node.js 底層庫 net 實現 ws 協議並收集使用者行為數據的伺服器。",
    tags: ["TS", "Node", "NPM"],
  },
  {
    title: "字典爬蟲",
    repo: "cambridge-dict-api",
    description: "簡易的字典網站，用爬蟲程式抓取資料，並以 Flask 開發網頁。",
    tags: ["Python", "Flask", "Web-Frontend", "Crawler"],
  },
  {
    title: "Favicon 工具",
    repo: "favicon-processor",
    description: "將圖片轉換一個 favicon.ico 並裁切成數個常用尺寸輸出。",
    tags: ["JS", "Node"],
  },
  {
    repo: "nuxt-aichat",
    description: "CH4 的前身，以 Nuxt.js 實作。",
    tags: ["TS", "Vue", "Nuxt", "MongoDB"],
  },
  {
    repo: "ts-env",
    description: "一個簡易的加載 .env 環境變量的模組。",
    tags: ["TS", "Node", "NPM"],
  },
  {
    repo: "ts-gtrans",
    description: "一個嘗試對翻譯網站的逆向工程。",
    tags: ["TS", "Node", "NPM"],
  },
  {
    repo: "axios-session",
    description: "一個簡易的創建附帶 session 功能的 axios 實例的模組。",
    tags: ["TS", "Node", "NPM"],
  },
  {
    repo: "super-date",
    description:
      "Extend the native JavaScript Date class to provide additional useful functionality.",
    tags: ["JS", "Node"],
  },
  {
    repo: "WS",
    description:
      "This module extends the functionality of the `ws` library, adding support for emitting and handling events, as well as creating and managing WebSocket rooms.",
    tags: ["JS", "Node"],
  },
  {
    repo: "png-background-stripper",
    description:
      "A tool that can change the background of a PNG image to transparent.",
    tags: ["Python"],
  },
];

const author = {
  name,
  website: "http://cch137.link",
  discord: "",
  twitter: "",
  github: `https://github.com/${name}`,
  profile: `https://github.com/${name}.png`,
  repos,
};

export default author;
