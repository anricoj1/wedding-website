// interfaces
import { ContainerProps } from "interfaces";


const Flexbox = ({ className = 'flex-child', title = 'Jason & Alisha', children }: ContainerProps) => {
    return (
        <div className={className}>
            <h1 className="header-text">
                {title}
            </h1>
            {children}
        </div>
    )
}

export default Flexbox;