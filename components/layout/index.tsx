// next
import Head from 'next/head';

// types
import { LayoutProps } from "types";

// components
import Header from './Header';
import Footer from './Footer';

// routes
import routes from 'routes/routes';


const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="h-screen w-screen">
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1" />
                <meta name="theme-color" />

                <link rel="icon" href="/favicon.ico" />
                <title>Jason & Alisha</title>
            </Head>
            <Header routes={routes} />
                {children}
            <Footer routes={routes} />
        </div>
    )
}

export default Layout;