export interface ModalProps {
    state: boolean;
    data: any;
}

export interface UseModalProps {
    modal: ModalProps;
    setModal: any;
    handleModalClick: any;
}

export interface RenderModalProps {
    modal: ModalProps;
    setModal: any;
    classes: any;
}