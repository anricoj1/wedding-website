// react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// context
import { MediaContext } from 'context';

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
            <MediaContext.Provider value={media}>
                <Router>
                    <Routes>
                        {routes.map((route: RouteProps, index: number) => {
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
            </MediaContext.Provider>
        </div>
    )
}

export default App;