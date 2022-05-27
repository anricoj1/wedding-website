// react
import { useState } from "react";

// types
import { ModalProps, UseModalProps } from "types"

export const useModal = (): UseModalProps => {
    // modal state
    const [modal, setModal] = useState<ModalProps>({ state: false, name: null, params: {} });

    // handle modal open spreads params
    const handleModalClick = (params: any) => {
        setModal({
            state: true,
            ...params
        })
    }

    // handle modal close
    const handleModalClose = () => {
        setModal({ state: false, name: null, params: {} })
    }

    return {
        modal: modal,
        setModal: setModal,
        handleModalClick: handleModalClick,
        handleModalClose: handleModalClose
    }
}