// react
import { useContext } from "react";

// context
import { MediaContext } from "context";

// components
import Gallery from "components/gallery";
import Container from "components/containers";
import Flexbox from "components/flexbox";

// image list
import imageList from "static/images";

const Index = () => {
    // use media context
    const media: Record<string, boolean> = useContext(MediaContext);

    return (
        <div className="home-flex">
            <Gallery
                imageList={imageList}
                intervalTime={60000}
            />
            <Flexbox>
                <Container className="main-container">
                    Home
                </Container>
            </Flexbox>
        </div>
    )
}

export default Index;