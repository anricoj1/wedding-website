// react
import { useContext, useLayoutEffect, useState } from "react";

// context
import { MediaQueryContext } from "context";

// interfaces
import { ContainerProps } from "interfaces";

// components
import ContainerMenu from "navigation/ContainerMenu";

/** * className = 'main-container', height = '80%', width = '80%', Can Provide Appbar as bool */
const Container = ({ className = 'main-container', height = '80%', width = '80%', Appbar = true, children }: ContainerProps) => {
    // use media context
    const media: Record<string, boolean> = useContext(MediaQueryContext);

    // classes
    const [styles, setStyles] = useState({ className: className, height: height, width: width });

    // switch styles state
    useLayoutEffect(() => {
        media['1000'] ? setStyles({ ...styles, height: '60%', className: 'none' }) : setStyles({
            ...styles,
            height: '80%',
            className: className
        });
    },[media['1000']]);

    return (
        <div className={styles.className} style={{
            height: styles.height,
            width: styles.width
        }}>
            {Appbar && !media['1000'] && (
                <ContainerMenu />
            )}
            {children}
        </div>
    )
}

export default Container;