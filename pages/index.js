import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { useRouter } from 'next/dist/client/router'
// import './i18n';

export default function Home() {
// const {locale} = useRouter()
// console.log(locale);
  return (
    <div className={styles.container}>
      <Head>
        <title>Maziar Rumiani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
        crossOrigin="anonymous"/>
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      </Head>
    </div>
  )
}
