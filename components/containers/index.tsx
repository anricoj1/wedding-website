// types
import { ContainerProps } from "types";

/** * className = 'main-container', height = '80%', width = '80%', Can Provide Appbar as bool */
const Container = ({ className = 'main-container', height = '80%', width = '80%', Appbar = true, children }: ContainerProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Container;