import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'





const PrivateRoute = ({ component: Component, ...rest })=> {
    const {isLogin} = useSelector(state => state.Auth)
    return(
        <Route {...rest} 
            render={(props)=> (
                isLogin ? (<Component {...props} />):(<Redirect to='/login' />)
                // loginAs() ? (<Component {...props} />):(<Redirect to='/login' />)
            )}
        />
    )


}



export default PrivateRoute