/*import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Tracker} from 'meteor/tracker';

import Signup from '../imports/ui/signUp';
import Link from '../imports/ui/link';
import Login from '../imports/ui/login';
import NotFound from '../imports/ui/notFound';

const history = createHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route path="/links" component={Link}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);
Tracker.autorun(() => {
    const unlisten = history.listen((location, action) => {
        // location is an object like window.location
        console.log(action, location.pathname, location.state)
    })

    const isAuthenticated = !!Meteor.userId();
    console.log('location: ', location.pathname);
    //const pathName =
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});
*/
