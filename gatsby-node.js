exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const locales = ['en', 'th']
  const pages = [
    { path: '', component: './src/pages/index.js' },
    { path: 'page', component: './src/pages/page.js' }
  ]

  locales.forEach(locale => {
    pages.forEach(({ path, component }) => {
      const urlBase = locale === 'en' ? '/' : `/${locale}/`
      createPage({
        path: `${urlBase}${path}`.replace(/\/\//g, '/'),
        component: require.resolve(component),
        context: {
          locale: locale
        }
      })
    })
  })
}
