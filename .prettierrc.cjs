module.exports = {
  semi: false,
  trailingComma: "all",
  useTabs: true,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: [".*", "*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
