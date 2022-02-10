const path = require('path')

module.exports = {
  title: 'My Lib',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is My Lib?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'Component A', link: '/components/component-a' },
          { text: 'Component B', link: '/components/component-b' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'my-lib': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
    }
  }
}
