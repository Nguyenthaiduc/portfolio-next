import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
//phần css cho cái Logo
const LogoBox = styled.span`
    font-weight:bold;
    font-size:19px;
    display:inline-flex;
    align-items:center;
    height : 30px;
    line-height: 20px;
    padding: 10px;
    &hover img {
    transform : rolate(20deg);
}
`
//kết thúc phần css cho Logo chính
const Logo = () => {
    const footPrintImg = `/images/goku${useColorModeValue('', '-dark')}.png`
    return(
        <Link href="/">
            <a>
                <LogoBox>
                <Image src = {footPrintImg} width={25} height={25}  alt=""/>
                <Text color = {useColorModeValue('gray.900' ,' whiteAlpha.800')}
                fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}>
                    Dusk

                </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default Logo    