import {HashRouter, Link, Route, Switch} from "react-router-dom";
import Arjs from "./pages/arjs";
import Marker from "./pages/marker";

function App() {

    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h1><Link to="/demo">Ar.js Demo</Link></h1>
                            <h1><Link to="/marker">Marker</Link></h1>
                        </div>
                    </Route>
                    <Route path="/demo">
                        <Arjs/>
                    </Route>
                    <Route path="/marker">
                        <Marker/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
