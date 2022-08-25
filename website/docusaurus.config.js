// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = 
  require('prism-react-renderer/themes/github');
const darkCodeTheme = 
  require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Static Web Apps Gallery',
  tagline: 'A Community Projects & Code Samples Showcase',

  url: 'https://30DaysOf.github.io',
  baseUrl: '/static-web-apps-gallery-code-samples/',
  organizationName: '30DaysOf', 
  projectName: 'static-web-apps-gallery-code-samples', 
  trailingSlash: false,
  deploymentBranch: `gh-pages`, 
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, 
        min: 640, 
        steps: 2, 
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      (
        {
          docs: false,
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SWA Gallery',
        logo: {
          alt: 'SWA Gallery Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: 'https://www.azurestaticwebapps.dev/', label: 'Community Hub', position: 'right'}, 
          {
            href: 'https://github.com/microsoft/static-web-apps-gallery-code-samples',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Discover',
            items: [
              {
                label: 'SWA Docs',
                to: 'https://docs.microsoft.com/en-us/azure/static-web-apps/overview',
              },
              {
                label: 'SWA CLI',
                to: 'https://github.com/Azure/static-web-apps-cli',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Learning Path',
                to: 'https://docs.microsoft.com/en-us/learn/paths/azure-static-web-apps/',
              },
              {
                label: 'Tips & Tricks',
                to: 'https://docs.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Dev.to',
                href: 'https://dev.to/t/staticwebapps',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AzureStaticApps',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with ♥️ using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: 'img/logo.png',

      metadata: [{
        name: 'twitter:card', 
        content: 'Welcome to the Azure Static Web Apps Gallery of community-created projects! Explore the examples - or add your own!'
      }],
      announcementBar: {
        id: 'Add Your Project!',
        content: '<b>Found this project helpful? Give us a star on <a href="https://github.com/microsoft/static-web-apps-gallery-code-samples"><b>GitHub</b></a></b> 🙏🏽',
        backgroundColor: '#552f99',
        textColor: '#FFFFFF',
        isCloseable: false,
      },
    }),
};

module.exports = config;
