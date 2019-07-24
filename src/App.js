import React, { Component } from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import { BrowserView, MobileView } from "react-device-detect";

class App extends Component {

    render() {
        return (
            <Router>
                <BrowserView>
                    <Switch>
                        {this.showMenu(routes)}
                    </Switch>
                </BrowserView>

                <MobileView>
                    <h1 className="tex-center">
                        UNDER CONSTRUCTION <br></br>
                        This is mobile template!
                    </h1>
                </MobileView>
            </Router>
        );
    }

    showMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.main}
                    />
                )
            })
        }
        return result;
    }
}

export default App;