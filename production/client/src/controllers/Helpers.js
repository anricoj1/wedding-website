// react
import React from 'react';

// material-ui
import { Modal, Fade, Backdrop, makeStyles, FormControl, TextField, MenuItem, Select, InputLabel } from '@material-ui/core'
import { Formik, Form, Field } from 'formik';

// modal types
import { Register, Alert } from './Modals';

// source url for embeded google map
let src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8624333946063!2d-72.95422008427465!3d41.311856208636506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d90227440709%3A0xf34572210f78f160!2s74%20Irving%20St%2C%20New%20Haven%2C%20CT%2006511!5e0!3m2!1sen!2sus!4v1623893388735!5m2!1sen!2sus";


export const GoogleMap = () => (
    <div className="map">
        <embed src={src} className="map-content" loading="lazy" />
    </div>
)

export const ModalRenderer = ({ setModal, modal }) => {
    // hide modal setStates null
    const hide = () => {
        return setModal({
            state: false,
            data: null
        });
    }

    // classes
    let classes = modalStyles();

    return (
        <Modal
            className={classes.modal}
            open={modal.state}
            onClose={hide}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={modal.state} timeout={2000}>
                <div className={classes.container}>
                    <ModalSwitch
                        modal={modal}
                        setModal={setModal}
                        classes={classes}
                    />
                </div>
            </Fade>
        </Modal>
    )
}

// render different div in window
const ModalSwitch = ({ modal, setModal, classes }) => {
    switch (modal.name) {
        case "Register":
            return <Register
                modal={modal}
                setModal={setModal}
                classes={classes}
             />
        case "Alert":
            return <Alert
                modal={modal}
                setModal={setModal}
                classes={classes}
             />
        default:
            return <div></div>
    }
}

// makesStyles for modal
export const modalStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        margin: 'auto',
        width: '60%',
        height: '700px',
        borderRadius: '20px',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    formControl: {
        marginTop: '15px'
    }
}));

// formvalues
let form_values = {
    party: '',
    email: '',
    attendees: [],
    status: '',
    questions: ''
}

let attendee_form = {
    first: '',
    last: '',
    attending: ''
}

// rsvping creates account >> give them a user role >> can edit anything on site
// combo this ^^ > rsvp > to edit > enter email > get code > login (people may easily forget password)