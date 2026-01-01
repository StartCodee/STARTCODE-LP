const path = require("path");
const Critters = require("critters-webpack-plugin");

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

      // ✅ JANGAN set resolve.conditionNames (biarkan default webpack)
      // Karena kalau di-set kosong, package dengan "exports" bisa gagal resolve.

      // (Opsional) Alias paksa production build untuk react-router jika kamu masih lihat dev path di bundle
      if (isProd) {
        webpackConfig.resolve = webpackConfig.resolve || {};
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

      webpackConfig.plugins.push(
        new Critters({
          // Inline CSS yang dipakai above-the-fold
          preload: "swap",       // sisa CSS di-load non-blocking
          pruneSource: true,     // buang CSS yang sudah di-inline dari file utama
          compress: true,
        })
      );


      return webpackConfig;
    },
  },
};
