// react
import { Fragment, useContext } from 'react';

// types
import { ExtendsProps } from "types";

// hooks
import { useModal } from 'hooks';

// context
import { MediaQueryContext, ModalContext } from "context";

// menu
import MenuTop from "navigation/MenuTop";
import MenuBottom from "navigation/MenuBottom";

// components
import RenderModal from 'components/modal';


const Extends = ({ Appbar = true, children }: ExtendsProps) => {
    // use media context
    const media: Record<string, boolean> = useContext(MediaQueryContext);

    // use modal
    const { modal, setModal, handleModalClick } = useModal();

    return (
        <Fragment>
            <ModalContext.Provider value={{ modal, setModal, handleModalClick }}>
                {Appbar && !media['1000'] && (
                    <MenuTop />
                )}

                {children}

                {media['1000'] && (
                    <MenuBottom />
                )}

                <RenderModal
                    modal={modal}
                    setModal={setModal}
                />
            </ModalContext.Provider>
        </Fragment>
    )
}

export default Extends;