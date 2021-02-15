import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import InsidePages from './inside'

const InsidePagesRoute = ({component: Component, isLogged, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogged ?
            <InsidePages>
                <Component {...props} />
            </InsidePages>
            : <Redirect to="/" />
        )} />
    );
};
const mapStateToProps = ({login:{isLogged}}) =>({
    isLogged,
  })
  export default connect(mapStateToProps)(InsidePagesRoute)