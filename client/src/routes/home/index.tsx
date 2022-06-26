// react
import { useContext } from 'react';

// context
import { MediaQueryContext, ModalContext } from "utils/context";

// types
import { PageProps } from "types";

// flex
import { Flexbox, FlexChild } from "components/flexbox";

// mui
import { withStyles } from "@material-ui/core";

// styles
import { useStyles } from "styles";

// components
import Gallery from "components/gallery";
import Container from "components/containers";
import CountdownWidget from 'components/countdown';
import AuthButton from 'components/buttons/auth';

// image list
import imageList from "static/images";

const Index = withStyles(useStyles)(({ classes }: PageProps) => {
    // media context
    const media: Record<string, boolean> = useContext(MediaQueryContext);

    // modal
    const { handleModalClick } = useContext(ModalContext);


    return (
        <Flexbox>
            <Gallery
                imageList={imageList}
                intervalTime={60000}
            />
            <FlexChild>
                <Container>
                    <div className="center" style={{
                        marginTop: media['1000'] ? 0 : '100px'
                    }}>
                        <h2 className="text-md merriweather">The Forevermore Farm</h2>
                        <h3 className="text-sm merriweather">Moore, South Carolina</h3>
                        <div className="date-info">
                            <h2 className="text-md merriweather">11/11/2023</h2>
                            <CountdownWidget destinationDate={new Date('Nov 11, 2023 12:00:00')} />
                        </div>
                        <AuthButton title="RSVP" classes={classes} />
                    </div>
                </Container>
            </FlexChild>
        </Flexbox>
    )
});

export default Index;