import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppList from '../list';
import AppDetail from '../detail';
import AppLog from '../log';

class Pages extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/list" component={AppList} />
                <Route path="/detail" component={AppDetail} />
                <Route path="/logger" component={AppLog} />
                <Redirect from="/" to="/list" />
            </Switch>
        )
    }
}

export default Pages