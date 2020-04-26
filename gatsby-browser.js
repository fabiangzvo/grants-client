/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require('react')
const Layout = require('./src/layouts/Layout').default
const { GlobalStyles } = require('./src/styles/GlobalStyles')
const { ThemeProvider } = require('emotion-theming');
const theme = require('./config/theme').default


export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {element}
      </Layout>
    </ThemeProvider>
  )
}