/** layout page props */
export interface LayoutProps {
    Appbar?: boolean;
    children: any;
}

/** image gallery props */
export interface GalleryProps {
    intervalTime?: number;
    imageList: Array<any>;
}

/** container props */
export interface ContainerProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    Appbar?: boolean;
    children: any;
}

/** flexbox props */
export interface FlexboxProps {
    className?: string;
    title?: string;
    children: any;
}

/** countdown props */
export interface CountdownWidgetProps {
    destinationDate: Date;
}