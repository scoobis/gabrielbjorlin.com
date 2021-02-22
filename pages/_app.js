import React, { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/styles/theme'
import Header from '../src/components/layouts/Header'
import Footer from '../src/components/layouts/Footer'

export default function MyApp(props) {
  const { Component, pageProps } = props
  const { pathname } = props.router

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Gabriel Björlin {pathname.length > 1 ? `| ${pathname.substring(1, pathname.length)}` : ''}</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Gabriel Björlin - Software Developer | Devops Engineer | Triathelete' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <h2 style={{ textAlign: 'center', color: 'grey' }}>
          <i className='fa fa-wrench' style={{ color: 'grey', marginRight: '10px' }}></i>
          Under konstruktion
        </h2>
        <Footer />
      </ThemeProvider>
    </>
  )
}
