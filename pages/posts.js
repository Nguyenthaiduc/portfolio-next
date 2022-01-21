import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'


const Works = () => {
  return (
    <Container>
      <Heading as="h1">404</Heading>
      <Text>Không tìm thấy trang vui lòng quay lại trang chủ !</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Về Trang Chủ</Button>
        </NextLink>
      </Box>
    </Container>
  )
}




export default Works

