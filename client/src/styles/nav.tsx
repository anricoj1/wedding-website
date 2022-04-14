// mui styles
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles'


const useStyles: Styles<Theme, {}, string> = (theme: Theme) => ({
    bottomNavigation: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        background: 'white',
        boxShadow: '2px 2px 20px black'
    },
    bottomIcon: {
        color: 'black',
        fontSize: 'large',
        transition: 'linkFade 0.5s ease'
    },
    menuIcon: {
        color: 'black'
    },
    rsvpBtn: {
        border: '1px solid black',
        width: '150px',
        padding: '20px'
    },
    rsvpBtnWhite: {
        border: '1px solid white',
        width: '150px',
        padding: '20px',
        color: 'white'
    }
});

export default useStyles;