import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
    // #202023
    global: props =>({
        body:{
            bg:mode('#f0e7db' ,'#101013' )(props), 
        }
    })
}

const components = {
    Heading:{
        variants:{
            'section-title':{
                TextDecoration:'underline',
                fonSize:20,
                textUnderlineOffset:6,
                textDecorationColor: '#525252',
                textDecorationThickness:4,
                marginBottom:4
            }
        }
    },
    Link:{
        baseStyle: props  =>({
            color: mode('#3d7aed' , '#ff63c3')(props),
            textUnderlineOffset:3,

        })
    }
}
const fonts = {
    heading: "'M PLUS Rounded 1c',",
}
const colors = {
    glassTeal: '#88ccca',
}
const config = {
    initialColorMode  : 'dark',
    useSystemColorMode:true,
}
const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme