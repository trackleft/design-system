module.exports = {
  "stories": ["../stories/**/*.mdx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": {
    name: "@storybook/web-components-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
