const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'My-Lib',
  description: 'This is my first VuePress site',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/',
        children: [
          '/guide/README.md'
        ]
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          '/components/component-a.md',
          '/components/component-b.md'
        ]
      },
    ]
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'), // register lib components
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'), // register demo components
      },
    ],
  ],
  alias: {
    'my-lib': path.resolve(__dirname, '../../src'), // allow import from 'mylib'
  },
}
