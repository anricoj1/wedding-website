// react
import { Fragment, useContext } from 'react';

// types
import { ExtendsProps } from "types";

// utils
import { useModal } from 'utils/hooks';
import { MediaQueryContext, ModalContext } from "utils/context";

// menu
import MenuTop from "components/navigation/MenuTop";
import MenuBottom from "components/navigation/MenuBottom";

// components
import RenderModal from 'components/modal';


const Extends = ({ Appbar = true, children }: ExtendsProps) => {
    // use media context
    const media: Record<string, boolean> = useContext(MediaQueryContext);

    // use modal
    const { modal, setModal, handleModalClick, handleModalClose } = useModal();

    return (
        <Fragment>
            <ModalContext.Provider value={{ modal, setModal, handleModalClick, handleModalClose }}>
                {Appbar && !media['1000'] && (
                    <MenuTop />
                )}

                {children}

                {media['1000'] && (
                    <MenuBottom />
                )}

                <RenderModal
                    modal={modal}
                    handleModalClose={handleModalClose}
                />
            </ModalContext.Provider>
        </Fragment>
    )
}

export default Extends;