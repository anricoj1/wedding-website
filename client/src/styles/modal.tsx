// mui styles
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles'


export const useStyles: Styles<Theme, {}, string> = (theme: Theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    modalContainer: {
        backgroundColor: theme.palette.background.paper,
        margin: 'auto',
        width: '60%',
        height: '700px',
        borderRadius: '20px',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
})