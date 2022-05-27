// modal state props
export interface ModalProps {
    state: boolean;
    name: string | null;
    params: any | null;
}

// use modal hook
export interface UseModalProps {
    modal: ModalProps;
    setModal: any;
    handleModalClick: Function;
    handleModalClose: Function;
}

// render modal component props
export interface RenderModalProps {
    modal: ModalProps;
    handleModalClose: any;
    classes: any;
}