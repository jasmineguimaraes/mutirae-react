import React from 'react'
import { Route } from 'react-router-dom'

import OutsidePages from './outside'

const OutsidePagesRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <OutsidePages>
                <Component {...props} />
            </OutsidePages>
        )} />
    )
}

export default OutsidePagesRoutes