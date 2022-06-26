// react
import { createContext } from 'react';
import { UseModalProps } from 'types';
import { useNavigate } from 'react-router-dom';

// auth0
import { Auth0Provider } from '@auth0/auth0-react';


// media query context
export const MediaQueryContext = createContext(null || {});

// modal context
export const ModalContext = createContext<UseModalProps>({ 
    modal: { state: false, name: null, params: {} },
    setModal: null,
    handleModalClick: (data: any) => null,
    handleModalClose: () => null
});

export const Auth0ProviderWithHistory = ({ children }: { children: JSX.Element }) => {
    // environment variables
    const domain: string = import.meta.env.VITE_AUTH_DOMAIN ? import.meta.env.VITE_AUTH_DOMAIN : '';
    const clientId: string = import.meta.env.VITE_CLIENT_ID ? import.meta.env.VITE_CLIENT_ID : '';

    // history
    const history = useNavigate();

    // redirect callback
    const onRedirectCallback = (appState: any) => {
        history(appState?.returnTo || window.location.pathname);
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )

}