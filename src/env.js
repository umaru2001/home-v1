// 站点信息
const meta = {
  env: {
    VITE_SITE_URL: "pengdonglai.com", // 站点地址
    VITE_SITE_LOGO: "/images/icon/favicon.ico", // 站点主图标
    VITE_SITE_MAIN_LOGO: "/images/icon/logo.png", // 主页图标
    VITE_SITE_APPLE_LOGO: "/images/logo/apple-touch-icon.png", // Apple 端图标
    // 简介文本
    VITE_DESC_HELLO: "Hello World !",
    VITE_DESC_TEXT: "心中的憧憬与向往，一如海祇岛上的那片珊瑚森林",
    VITE_DESC_HELLO_OTHER: "Oops !",
    VITE_DESC_TEXT_OTHER: "哎呀，这都被你发现了（ 再点击一次可关闭 ）",
    // 天气 Key
    VITE_WEATHER_KEY: "",
    // 建站日期
    VITE_SITE_START: "2019-10-02",
    // ICP
    VITE_SITE_ICP: "",
    VITE_SONG_API: "",
    // 歌曲服务器 ( netease-网易云, tencent-qq音乐 )
    VITE_SONG_SERVER: "netease",
    // 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )
    VITE_SONG_TYPE: "playlist",
    // 播放 ID ( 若无需播放器，请设为空即可 )
    VITE_SONG_ID: "9379831714",
  }
};

// 社交链接请在 src/assets/socialLinks.json 文件中配置

// 网站链接: 请在 src/assets/siteLinks.json 文件中配置
// 网站链接的图标名称可前往 https://www.xicons.org 自行挑选并在 src/components/Links/index.vue 中引入

// 请前往 高德开放平台注册 Web服务 Key
// 请注意不是 Web端 (JS API)，免费申请，每日上限 5000 次
// 此处提供的服务可能会超量从而无法访问，请自行申请！请自行申请！请自行申请！
// 若此处设为空则调用 教书先生 API https://api.oioweb.cn/doc/weather/GetWeather

// ICP 备案号

// 歌曲 API 地址
// 请参照 https://github.com/xizeyoupan/Meting-API//deno-deploy 进行 API 服务部署
// 此处提供的服务可能会超量从而无法访问，请自行部署
// 若使用 QQ 音乐歌单，歌曲数量最好不要超出 50 首
// 备用：https://api.wuenci.com/meting/api/

export default meta;
