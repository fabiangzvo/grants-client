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