// react
import { createContext } from 'react';
import { UseModalProps } from 'types';

// media query context
export const MediaQueryContext = createContext(null || {});

// modal context
export const ModalContext = createContext<UseModalProps>({ 
    modal: { state: false, data: null },
    setModal: null,
    handleModalClick: (data: any) => console.log('clicked')
});