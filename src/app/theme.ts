import { extendTheme, withDefaultColorScheme, withDefaultSize, defineStyleConfig, background } from '@chakra-ui/react'
import { fonts } from './fonts'
import { link } from 'fs';
const Box = defineStyleConfig({
    baseStyle: {
        boxShadow: 'lg',
        bg: 'primary.500',

    }
});

const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: 'md',
        _focus: {
            boxShadow: 'none',
        },
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 2,
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 3,
        },
        lg: {
            fontSize: 'lg',
            px: 8,
            py: 4,
        },
    },
    variants: {
        solid: {
            bg: 'primary.500',
            color: 'white',
            fontsize: 'sm',
            _hover: {
                bg: 'primary.600',
                boxShadow: 'lg',
            },
        },
        outline: {
            border: '2px solid',
            borderColor: 'primary.500',
            color: 'primary.500',
            _hover: {
                bg: 'primary.500',
                color: 'white',
            },
        },
        link: {
            color: 'primary.500',
            fontsize: 'sm',
            _hover: {
                textDecoration: 'underline',
            },
        },
        ghost: {
            bg: 'transparent',
            fontWeight: '500',
            fontSize: 'sm',
            _hover: {
                bg: 'transparent',
                color: 'primary.600',
                filter: 'drop-shadow(rgba(11, 87, 255) 0px 0px 8px)'
            },
            _focus: {
                bg: 'transparent',
                color: 'primary.600',
                filter: 'drop-shadow(rgba(11, 87, 255) 0px 0px 8px)'
            },
            _focusVisible: {
                bg: 'transparent',
                color: 'primary.600',
                filter: 'drop-shadow(rgba(11, 87, 255) 0px 0px 8px)'
            },
            _active: {
                bg: 'transparent',
                color: 'primary.600',
                filter: 'drop-shadow(rgba(11, 87, 255) 0px 0px 8px)'
            }
        },
    },
    defaultProps: {
        size: 'sm',
        variant: 'solid',
    },
});
export const theme = extendTheme(
    {
        colors: {
            primary: { 100: '#f4f8ff', 200: '#a3c0ff', 300: "#6293ff", 400: '#3372ff', 500: '#165eff', 600: '#023ab7' },
        },
        fonts: {
            body: fonts.montserrat.style.fontFamily,
        },
        config: {
            cssVarPrefix: 'loop',
        },
        global: {
            body: {
                fontSize: 'sm',
                background: "rgb(240, 242, 244)",
            }
        },
        components: {
            Box,
            Button
        }
    })