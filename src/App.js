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
                    <div className="container-fluid">
                        <p className="display-5">PHOTOCITY ON MOBILE</p>
                        <img src={process.env.PUBLIC_URL + '/img/google-play.png'} className="mr-2" alt="google play" />
                        <img src={process.env.PUBLIC_URL + '/img/app-store.png'} className="" alt="app store" />
                        <div style={{ bottom: '10px', padding: 0, position: 'fixed', right: '10px', zIndex: 9999 }}>
                            <img src={process.env.PUBLIC_URL + '/img/under-construction.png'} alt="under construction" width="200px" />
                        </div>
                    </div>
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