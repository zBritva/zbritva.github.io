import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ilfat Galiev',
  tagline: 'Tech diary',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ilfat-galiev.im/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zbritva', // Usually your GitHub org/user name.
  projectName: 'zbritva.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      {
        debug: true,
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        docs: {
          id: 'docs',
          routeBasePath: 'docs',
          // sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          exclude: [
            'tutorial-extras',
            'tutorial-basics'
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          // docCategoryGeneratedIndexComponent:
          //   "@site/src/components/CategoryIndexPage",
        },
        blog: {
          blogSidebarCount: 'ALL',
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Ilfat Galiev.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          path: "./pages",
          routeBasePath: '/pages',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ]
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-2W0Q8RHPCT',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.svg',
    navbar: {
      title: 'Ilfat Galiev',
      logo: {
        alt: 'Ilfat Galiev Blog Logo',
        src: 'https://avatars.githubusercontent.com/u/10897951?v=4',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {to: '/docs', label: 'Visual documentations', position: 'left'},
        {
          label: 'Visuals',
          position: 'left',
          items: [
            {
              to: 'https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.echartsvisual?',
              label: 'Apache ECharts Visual',
              target: '_blank'
            },
            {
              to: '/visuals/apexchartsVisual.pbiviz',
              label: 'ApexCharts Visual',
              target: '_blank'
            },
            {
              to: 'https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.markdown_mermaid_visual?tab=Overview',
              label: 'Markdown/Mermaid Visual',
              target: '_blank'
            },
            {
              to: 'https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.handlebars_visual?tab=Overview',
              label: 'HTML/SVG/Handlebars Visual',
              target: '_blank'
            },
            {
              to: 'https://appsource.microsoft.com/en-us/product/power-bi-visuals/ilfatgaliev1696579877540.editorvisual?tab=Overview',
              label: 'Power BI Visual Editor',
              target: '_blank'
            },
            {
              to: 'https://appsource.microsoft.com/en-us/marketplace/apps?search=Charticulator%20Visual%20Community&page=1',
              label: 'Charticulator Visual Community',
              target: '_blank'
            },
            {
              to: "https://github.com/zBritva/charticulator-visual-community/actions/runs/11085759748",
              label: 'Charticulator Visual Community (Editor/View) DEV',
              target: '_blank'
            },
            {
              to: "/visuals/charticulator.charticulator58556A88422D44A99D9BF0052B958F87.1.5.0.0.pbiviz",
              label: 'Microsoft Charticulator (LEGACY old GUID)',
              target: '_blank'
            },
            {
              to: "/visuals/charticulator.charticulatorLegacy.1.5.0.0.pbiviz",
              label: 'Microsoft Charticulator (LEGACY new GUID)',
              target: '_blank'
            }
          ]
        },
        {
          icon: 'fa-github',
          to: 'https://ilfat-galiev.im/charticulator',
          label: 'Charticulator app',
          position: 'left'},
        // {
        //   href: 'https://github.com/sponsors/zBritva',
        //   label: 'DONATE',
        //   position: 'right',
        // },
        {
          href: '/pages/privacy',
          label: 'Privacy',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/ilfat-galiev/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/zbritva',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://ilfat-galiev.im/pages/about',
          label: 'About me',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Visual documentations',
              to: 'https://ilfat-galiev.im/docs/',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ilfat Galiev. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // themes: ['@docusaurus/theme-mermaid']
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://ilfat-galiev.im',
      },
    }
  ]
};

export default config;
