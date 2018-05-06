const isTest = process.env.NODE_ENV === "test";

module.exports = {
  presets: ["react-app"],
  plugins: [!isTest && "external-helpers"].filter(Boolean)
};
