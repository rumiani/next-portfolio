import Layout from '../components/Layout'
import Projects from '../components/Projects'
import UnderNav from '../components/UnderNav/UnderNav'
import '../styles/globals.css'
import React from 'react';
import { useSSR } from 'react-i18next';

export function InitSSR({ initialI18nStore, initialLanguage }) {
  useSSR(initialI18nStore, initialLanguage);

  return <App />
}


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <UnderNav/>
      <Component {...pageProps} />
      <Projects/>
    </Layout>
    )
  }
  

export default MyApp
