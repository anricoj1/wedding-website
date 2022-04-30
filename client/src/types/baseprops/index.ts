export interface ExtendsProps {
    Appbar?: boolean;
    children: any;
}

export interface GalleryProps {
    intervalTime?: number;
    imageList: Array<any>;
}

export interface ContainerProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    Appbar?: boolean;
    children: any;
}

export interface FlexboxProps {
    className?: string;
    title?: string;
    children: any;
}

export interface CountdownWidgetProps {
    destinationDate: Date;
}