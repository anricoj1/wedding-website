// interfaces
import { PageProps } from "interfaces";

// flex
import { Flexbox, FlexChild } from "components/flexbox";

// mui
import { withStyles } from "@material-ui/core";

// styles
import { useStyles } from "styles";

// components
import Gallery from "components/gallery";
import Container from "components/containers";

// image list
import imageList from "static/images";

const Index = withStyles(useStyles)(({ classes }: PageProps) => {

    return (
        <Flexbox>
            <Gallery
                imageList={imageList}
                // intervalTime={60000}
            />
            <FlexChild>
                <Container>
                    Home
                </Container>
            </FlexChild>
        </Flexbox>
    )
});

export default Index;