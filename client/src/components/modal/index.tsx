// types
import { RenderModalProps } from 'types';

// mui
import { Modal, Fade, Backdrop, withStyles } from '@material-ui/core';

// styles
import { useStyles } from 'styles/modal';


const RenderModal = withStyles(useStyles)(({ modal, handleModalClose, classes}: RenderModalProps) => {
    // values from modal
    const { state } = modal;

    return (
        <Modal
        className={classes.modal}
        open={state}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500
        }}
    >
        <Fade in={modal.state} timeout={500}>
            <div className={classes.modalContainer}>
                
            </div>
        </Fade>
    </Modal>
    )
});

export default RenderModal;