import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'


const InsidePagesRoute = ({component: Component, isLogged, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogged ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};
const mapStateToProps = ({login:{isLogged}}) =>({
    isLogged,
  })
  export default connect(mapStateToProps)(InsidePagesRoute)