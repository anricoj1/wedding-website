// react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// mui
import { useTheme } from '@material-ui/core';
import { useMedia } from 'styles';

// interfaces
import { BaseProps, RouteProps } from 'interfaces';

// routes
import routes from 'routes';

// images
import useImages from 'static';


const App = () => {
    // themes
    let theme = useTheme();
    let media = useMedia(theme);

    // props
    let props: BaseProps = {
        media: media,
        images: useImages
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    {routes(props).map((route: RouteProps, index: number) => {
                        const { path, element } = route;

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={element}
                            />
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}

export default App;