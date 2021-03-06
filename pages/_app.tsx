// next types
import type { AppProps } from 'next/app'

// components
import Layout from 'components/layout';

// css
import 'styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App;