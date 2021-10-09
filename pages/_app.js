import Layout from '../components/Layout'
import Projects from '../components/Projects'
import UnderNav from '../components/UnderNav/UnderNav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <div>
        <Layout>
          <UnderNav/>
          <Component {...pageProps} />
          <Projects/>
        </Layout>
    </div>
    )
  }
  

export default MyApp
