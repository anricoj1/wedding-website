export interface RouteProps {
    title: string;
    path: string;
    element: JSX.Element;
    icon: JSX.Element;
}

export interface PageProps {
    classes: any;
}

export interface NavProps {
    classes: any;
    links?: Record<string, RouteProps>;
}