import React, { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/styles/theme'
//import Header from '../src/components/layouts/Header/Header'
//import Footer from '../src/components/layouts/Footer'

export default function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>Webbshop</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}
