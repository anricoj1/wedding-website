// react
import { useState } from "react";

// types
import { ModalProps, UseModalProps } from "types"

export const useModal = (): UseModalProps => {
    // modal state
    const [modal, setModal] = useState<ModalProps>({ state: false, data: null });

    return {
        modal: modal,
        setModal: setModal,
        handleModalClick: (data: any) => {
            setModal({
                state: true,
                data: data
            })
        }
    }
}