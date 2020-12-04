const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@providers": path.resolve(__dirname, "src/providers/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@types": path.resolve(__dirname, "src/types.ts"),
      "@generated": path.resolve(__dirname, "__generated__/types.ts"),
    },
  },
};
