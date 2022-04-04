export interface Image {
    name: string;
    src: string
}

export interface GalleryProps {
    intervalTime?: number;
    imageList: Array<any>;
}

export interface RouteProps {
    title: string;
    path: string;
    element: JSX.Element;
    icon: JSX.Element;
}

export interface PageProps {
    media: any;
    classes: any;
    images: Record<string, Image>;
}