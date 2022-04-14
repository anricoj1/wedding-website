// interfaces
import { FlexboxProps } from "interfaces";


/** * className = 'flex-container' */
export const Flexbox = ({ className = 'flex-container', children }: FlexboxProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

/** * className = 'flex-child, title = 'Jason & Alisha', child of Flexbox */
export const FlexChild = ({ className = 'flex-child', title = 'Jason & Alisha', children }: FlexboxProps) => {
    return (
        <div className={className}>
            {title && (
                <h1 className="header-text">
                    {title}
                </h1>
            )}
            {children}
        </div>
    )
}