// Import scss
import '../assets/css/bootstrap.min.css';
import '../assets/css/materialdesignicons.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/css/style.css';
import '../assets/css/colors/red.css';
import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../layouts/Landing';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>NFACT</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>

  )
}

export default MyApp
