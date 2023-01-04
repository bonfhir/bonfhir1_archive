// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bonfhir",
  tagline:
    "A collection of projects and libraries to help implement FHIR-based products and solutions.",
  url: "https://bonfhir.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "bonfhir",
  projectName: "bonfhir.github.io",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/bonfhir/bonfhir/tree/main/packages/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "codegen",
        path: "codegen",
        routeBasePath: "codegen",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/bonfhir/bonfhir/tree/main/packages/docs/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "packages",
        path: "packages",
        routeBasePath: "packages",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/bonfhir/bonfhir/tree/main/packages/docs/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Bonfhir",
        logo: {
          alt: "FHIR Logo",
          src: "img/icon-fhir-128.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Get started",
          },
          {
            to: "/packages/all",
            label: "Packages",
            position: "left",
            activeBaseRegex: `/packages/`,
          },
          {
            to: "/codegen/codegen",
            label: "Code Generation",
            position: "left",
            activeBaseRegex: `/codegen/`,
          },
          {
            href: "https://github.com/bonfhir/bonfhir",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
