const { description } = require('../../package')

module.exports = {
  title: 'Test Documentation Page',
  description: description,
  base: '/test-vuepress/',
  head: [
    ['meta', { name: 'theme-color', content: '#d60f0f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/common/logo.png',
    nav: [
      {
        text: 'Section 1',
        link: '/section1/',
      },
      {
        text: 'Section 2',
        link: '/section2/',
      },
    ],
    sidebar: {
        '/section1/': [
          {
            title: 'Section 1',
            path: '/section1/',
            sidebarDepth: 2,
            children: [
              ['http://google.es', 'Go to google'],
              ['subsection1', 'Subsection 1'],
              ['subsection2', 'Subsection 2'],
            ]
          }
        ],
        '/section2/': [
          {
            title: 'Section 2',
            path: '/section2/',
            sidebarDepth: 1,
            children: [
              ['http://google.es', 'Go to google'],
              ['http://github.com', 'Github'],
            ]
          }
        ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
