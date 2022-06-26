// auth0
import { useAuth0 } from "@auth0/auth0-react"

// mui
import { Button } from '@material-ui/core';



export const AuthButton = ({ title, classes }: { title: string, classes: any }) => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            onClick={() => loginWithRedirect() }
            className={classes.rsvpBtn}
            variant="outlined"
        >
            {title}
        </Button>
    )
}

export default AuthButton;