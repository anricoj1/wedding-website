// mui styles
import { useMediaQuery } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles'


export const useMedia = (theme: Theme) => {
    return {
        "1025": useMediaQuery(theme.breakpoints.down(1181))
    }
}

export const useStyles: Styles<Theme, {}, string> = (theme: Theme) => ({
    root: {
        width: '100%'
    },
    appbar: {
        height: '70px',
        position: 'static',
        background: 'transparent',
        color: 'white',
        boxShadow: 'none',
        transition: '1s ease'
    },
    appbarScrolled: {
        height: '70px',
        position: 'static',
        background: 'white',
        transition: '1s ease',
        boxShadow: '2px 2px 10px black'
    },
    appbarActive: {
        height: '80px',
        position: 'static',
        background: 'white',
        color: 'black',
    },
    content: {
        position: 'static',
        width: '100vw',
        height: '100vh',
        color: 'white'
    },
    flexBox: {
        display: 'flex',
        padding: '20px',
        width: '100%',
        cursor: 'pointer'
    },
    link: {
        fontFamily: 'Lobster',
        width: '100%',
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            color: 'black'
        }
    },
    linkBrand: {
        fontFamily: 'Lobster',
        width: '100%',
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: 'white'
        }
    },
    listitem: {
        letterSpacing: '4px',
        fontSize: '17px',
        '&::after': {
            position: 'absolute',
            content: '""',
            top: '100%',
            left: 0,
            width: '100%',
            height: '2px',
            background: 'black',
            transform: 'scaleX(0)',
            transition: '0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
        },
        '&:hover::after': {
            transform: 'scaleX(1)'
        }
    },
    bottomNavigation: {
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        background: 'white',
    },
    bottomIcon: {
        color: 'black'
    },
    btnRSVP: {
        width: '50%',
        padding: '20px',
        margin: '20px auto',
        background: 'white',
        boxShadow: '2px 2px 5px black',
        color: 'black',
        fontSize: '20px',
        '&:hover': {
            background: 'white',
            boxShadow: '5px 5px 10px black'
        }
    },
    card: {
        width: '50%',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px black',
        margin: '10px auto'
    }
})