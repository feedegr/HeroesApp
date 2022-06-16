import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';


export const PublicRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    
    return (
    <Route {...rest}
        component = { (props) => (
            (!isAuth)
            ? <Component {...props} />
            : (<Redirect to='/' />)
        )}
    />
  )
}

PublicRoute.prototypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}