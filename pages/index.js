import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link , Button ,List , ListItem ,Icon,SimpleGrid,GridItem } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {BioSection , BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoFacebook} from 'react-icons/io5'
import Footer from '../components/footer'
import Bg from '../components/background-animation'
import { SiSpotify } from "react-icons/si";


export default function Home() {
  return (
    //phần header tiêu đề
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('WhiteAlpha.500', 'WhiteAlpha.200')} p={3} mb={6} align="center">
        Hello I&apos;m Nguyen Duc ^_^
      </Box>
      {/* Phan tren */}
      <Box display={{ md: 'flex' }} >
        <Box flexGrow={1}>

          <Heading as="h2" variant="page-title" >
            Nguyen Duc
          </Heading>
          <p>Sometimes music speaks what you feel inside 🎶</p>
        </Box>
        {/* Avatar */}
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor=" whiteAlpha.800"
            borderWidth={2} borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full" src="/images/dusk.jpg"
            alt="Profile Avatar"

          />
        </Box>
        
      </Box>

      {/* // hiệu ứng Section */}
      <Section delay={0.2} >
        
          
            
          
        
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Chào Mừng Các Bạn Đã Ghé Thăm
         
          {/* <NextLink href="/works/inkdrop"><Link>Inkdrop</Link>
          </NextLink> */}
          .
        </Paragraph>
       
                
              
               
             
        <Box align ="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
              Go to Work
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>20xx</BioYear>
          Born in HCMC (SaiGon) , VN
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Learning ...
          
        </BioSection>
          
        <Section delay={0.3}>
        <Heading as="h4" variant="section-title" fontSize={15}>
       
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                Facebook
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                Instagram
              </Button>
              </Link>
          </ListItem>
          <ListItem>
            <Link href="https://spotify.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={SiSpotify} />}
              >
                Spotify
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/"
            title="Dev as Life"
            
          >
           Coming soon
          </GridItem>
          <GridItem
            href="https://www.google.com/"
            title="Inkdrop"
            
          >
           
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              Go to Posts
            </Button>
          </NextLink>
        </Box>
      </Section>
      </Section>
      <Footer/>
    </Container>
  )
}
