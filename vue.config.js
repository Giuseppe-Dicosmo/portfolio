const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "Full Stack Web Developer",
    themeColor: "#ff5757",
  },
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",

  pwa: {
    name: "Full Stack Web Developer",
    themeColor: "#ff5757",
  },
};
