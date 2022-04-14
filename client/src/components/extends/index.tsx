// react
import { Fragment, useContext } from "react";

// interfaces
import { ExtendsProps } from "interfaces";

// context
import { MediaQueryContext } from "context";

// menu
import MenuTop from "navigation/MenuTop";
import MenuBottom from "navigation/MenuBottom";


const Extends = ({ Appbar = true, children }: ExtendsProps) => {
    // use media context
    const media: Record<string, boolean> = useContext(MediaQueryContext);

    return (
        <Fragment>
            {Appbar && !media['1000'] && (
                <MenuTop />
            )}

            {children}

            {media['1000'] && (
                <MenuBottom  />
            )}
        </Fragment>
    )
}

export default Extends;