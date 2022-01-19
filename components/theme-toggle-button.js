import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
//xu ly nut doi mau
const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton aria-label="Toggle theme"
            colorScheme={useColorModeValue('teal', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}>

        </IconButton>

    )
}

export default ThemeToggleButton