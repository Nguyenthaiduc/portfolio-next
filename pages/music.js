import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Music from '../components/music'

const Musics = () => {
  return (
    <Container>
    <Heading as="h1" align = 'center'>Âm Nhạc</Heading>
    <Text ></Text>
    <Divider my={6} />
    <Music />
    <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Về Trang Chủ</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Musics