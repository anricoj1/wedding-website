//** props for each route  */
export interface RouteProps {
    title: string;
    path: string;
    icon: JSX.Element;
}

//** navbar props */
export interface NavProps {
    routes: Record<string, RouteProps>;
}