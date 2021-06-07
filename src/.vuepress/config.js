const { description } = require('../../package')

module.exports = {
  title: 'Test Documentation Page',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#d60f0f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '/test-vuepress/',
    editLinkText: '',
    lastUpdated: false,
    logo: '/logo.png',
    nav: [
      {
        text: 'Section 1',
        link: '/section1/',
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
        ]
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
