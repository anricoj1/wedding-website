export interface Image {
    name: string;
    src: string
}

export interface BaseProps {
    media: any;
    images: Record<string, Image>;
}

export interface Route {
    title: string;
    path: string;
    element: JSX.Element;
    icon: JSX.Element;
}

export interface ContentProps {
    media: any;
    images: Record<string, Image>;
    routes: Array<Route>;
    classes: any;
}

export interface RouteProps {
    media: any;
    classes: any;
    images: Record<string, Image>;
}

export interface NavClassProps {
    bar: string;
    brand: string;
}