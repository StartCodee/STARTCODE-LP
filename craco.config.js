const path = require("path");
const webpack = require("webpack");

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === "true",
};

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      const isProd = process.env.NODE_ENV === "production";

      // pengaman: pastikan NODE_ENV ter-define
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        })
      );

      // ✅ bantu resolver pilih build "production" jika package pakai conditional exports
      if (isProd) {
        webpackConfig.resolve = webpackConfig.resolve || {};
        webpackConfig.resolve.conditionNames = webpackConfig.resolve.conditionNames || [];

        if (!webpackConfig.resolve.conditionNames.includes("production")) {
          webpackConfig.resolve.conditionNames.unshift("production");
        }

        // 🔧 paksa kalau ada import ke dist/development
        webpackConfig.resolve.alias = {
          ...(webpackConfig.resolve.alias || {}),
          "react-router/dist/development": "react-router/dist/production",
          "react-router-dom/dist/development": "react-router-dom/dist/production",
        };
      }

      // ---- Hot reload logic kamu (tetap) ----
      if (config.disableHotReload) {
        webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
          return plugin.constructor.name !== "HotModuleReplacementPlugin";
        });

        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/,
        };
      } else {
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            "**/node_modules/**",
            "**/.git/**",
            "**/build/**",
            "**/dist/**",
            "**/coverage/**",
            "**/public/**",
          ],
        };
      }

      return webpackConfig;
    },
  },
};
