import { defineClientAppEnhance } from '@vuepress/client'
import mylib from 'my-lib'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(mylib)
})
