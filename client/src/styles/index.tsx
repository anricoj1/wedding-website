// mui styles
import { useMediaQuery } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles'


export const useMedia = (theme: Theme) => {
    return {
        "1000": useMediaQuery(theme.breakpoints.down(1000))
    }
}

export const useStyles: Styles<Theme, {}, string> = (theme: Theme) => ({
    iconButton: {
        position: 'absolute',
        background: 'white',
        border: 'black',
        boxShadow: '2px 2px 5px black',
        margin: '10px',
        bottom: 0,
        right: 0,
        transition: '0.5s ease',
        '&:hover': {
            transition: '0.5 ease-out',
            background: 'rgba(0, 0, 0, 0.3)',
        }
    },
    menuIcon: {
        color: 'black',
        '&:hover': {
            fill: 'white'
        }
    },
    rsvpBtn: {
        padding: '30px',
        width: '40%',
        border: '1px solid black',
        fontSize: '20px',
        transition: '0.8s ease',
        '&:hover': {
            boxShadow: '2px 2px 5px black',
            transition: '0.8s ease'
        }
    }
})