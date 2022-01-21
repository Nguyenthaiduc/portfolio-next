import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Flex,
    Stack,
    Heading,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray300', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#18181B' : inactiveColor}>
                {children}
            </Link>
        </NextLink>

    )
}

//phần Navbar
const Navbar = (props) => {
    const { path } = props  //lấy path là cái props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2} maxW="container.wd"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5} >
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>

                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Work
                    </LinkItem>

                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/music" path={path}>
                        Music
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                {/* nut doi mau background */}
                <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                colorScheme='blue'
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="/music" passHref>
                                    <MenuItem as={Link}>Music</MenuItem>
                                </NextLink>
                                
                            </MenuList>

                        </Menu>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default Navbar