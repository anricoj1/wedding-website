// react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// context
import { MediaQueryContext } from 'context';

// mui
import { useTheme } from '@material-ui/core';
import { useMedia } from 'styles';

// interfaces
import { RouteProps } from 'interfaces';

// routes
import routes from 'routes';

const App = () => {
    // themes
    let theme = useTheme();
    let media = useMedia(theme);

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