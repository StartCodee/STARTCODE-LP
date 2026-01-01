// Load configuration from environment or config file
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

      // ✅ Inline critical CSS hanya saat production build
      if (isProd) {
        webpackConfig.plugins.push(
          new Critters({
            preload: "swap",
            pruneSource: true,
            compress: true,
          })
        );
      }

      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
          return !(plugin.constructor.name === "HotModuleReplacementPlugin");
        });

        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
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
