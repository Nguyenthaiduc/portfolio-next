import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts.js'
import { AnimatePresence } from 'framer-motion'
import Particles from "react-tsparticles";
import snowConfig from "../lib/particular";


function MyApp({ Component, pageProps ,router }) {
  
 
  return (
    
  <ChakraProvider theme={theme}>
  <Fonts />
  <Particles id="tsparticles" options={snowConfig} />

    <Layout router={router}>
    <AnimatePresence exitBeforeEnter initial={true}> 
    <Component {...pageProps} key ={router.route} />
    </AnimatePresence>
    </Layout>
  </ChakraProvider>
)
}

export default MyApp
