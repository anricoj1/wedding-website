// react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// context
import { MediaQueryContext } from 'utils/context';

// mui
import { useTheme, Theme } from '@material-ui/core';
import { useMedia } from 'styles';

// types
import { RouteProps } from 'types';

// routes
import routes from 'routes';

const App = () => {
    // themes
    let theme: Theme = useTheme();
    let media: Record<string, boolean> = useMedia(theme);

    return (
        <div className="App">
            <MediaQueryContext.Provider value={media}>
                <Router>
                    <Routes>
                        {Object.values(routes).map((route: RouteProps, index: number) => {
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
            </MediaQueryContext.Provider>
        </div>
    )
}

export default App;