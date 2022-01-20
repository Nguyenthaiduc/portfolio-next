import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts.js'
import Particles from "react-tsparticles";




function MyApp({ Component, pageProps ,router }) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    
  <ChakraProvider theme={theme}>
  <Fonts />
  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: ""
          },
        },
        fpsLimit: 90,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "random",
          },
          links: {
            color: "random",
            distance: 100,
            enable: true,
            opacity: 0.1,
            width: 10,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounceVertical",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["circle", "triangle", "polygon", "star"],
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  

    <Layout router={router}> 
    <Component {...pageProps} key ={router.route} />
    </Layout>
  </ChakraProvider>
)
}

export default MyApp
