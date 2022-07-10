// next types
import type { NextPage } from 'next';

// flex
import { Flexbox, FlexChild } from "components/flexbox";

// components
import Gallery from "components/gallery";
import Container from "components/containers";
import CountdownWidget from 'components/countdown';

// images
import imageList from 'public/images';


const Home: NextPage = () => {
    return (
        <Flexbox>
            <Gallery
                imageList={imageList}
                intervalTime={60000}
            />
            <FlexChild>
                <Container>
                    <div className="center mt-100 tablet: mt-0">
                        <h2 className="text-xl font-merriweather">The Forevermore Farm</h2>
                        <h3 className="text-sm font-merriweather">Moore, South Carolina</h3>
                        <div className="date-info">
                            <h2 className="text-md font-merriweather">11/11/2023</h2>
                            <CountdownWidget destinationDate={new Date('Nov 11, 2023 12:00:00')} />
                        </div>
                    </div>
                </Container>
            </FlexChild>
        </Flexbox>
    )
}

export default Home;