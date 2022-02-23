// Import scss
import '../assets/css/bootstrap.min.css';
import '../assets/css/materialdesignicons.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/css/style.css';
import '../assets/css/colors/red.css';
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/video-react.css'
import Layout from '../layouts/Landing';
import  { EventProvider } from './Context/EventContext';
import "../node_modules/react-modal-video/scss/modal-video.scss";

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>NFACT</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <EventProvider>
      <Component {...pageProps} />
     </EventProvider>
    </Layout>
  </>

  )
}

export default MyApp
