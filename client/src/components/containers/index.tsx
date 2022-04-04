// interfaces
import { ContainerProps } from "interfaces";

const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Container;