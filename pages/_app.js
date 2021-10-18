import { useEffect } from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects/Projects'
import UnderNav from '../components/UnderNav/UnderNav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let loaded = false
useEffect(() => {
 loaded = true;
}
  )
  return (
        <Layout>
          <UnderNav/>
          <Component {...pageProps} />
          <Projects/>
        </Layout>
    )
  }
  

export default MyApp
