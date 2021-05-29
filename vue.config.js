module.exports = {
  pwa: {
    themeColor: "#EDEEF7",
    msTileColor: "#7868E6",
    appleMobileWebAppCache: "yes",
    icons: [
      {
        src: "icons/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    iconPaths: {
      favicon32: "icons/logo.svg",
      favicon16: "icons/logo.svg",
      appleTouchIcon: "icons/maskable_icon_x192.png",
      maskIcon: "icons/logo.svg",
      msTileImage: "icons/maskable_icon_x128.png",
    },
    manifestOptions: {
      background_color: "#EDEEF7",
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
