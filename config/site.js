module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Grants', // Navigation and Site Title
  titleAlt: 'Grants', // Title for JSONLD
  description: 'Find, apply and succeed grants',
  url: 'https://grants-licimatic.herokuapp.com/api/grants', // Domain of your site. No trailing slash!
  siteUrl: 'https://grants-licimatic.herokuapp.com/api/grants', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/favicon.png', // Used for SEO
  banner: 'static/logo/faviconr.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'Grants', // shortname for manifest. MUST be shorter than 12 characters
  author: '@fabiagzvo', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@justinformentin', // Twitter Username
};
