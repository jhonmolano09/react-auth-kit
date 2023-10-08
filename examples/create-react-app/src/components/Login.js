import React from 'react'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useSignIn from 'react-auth-kit/hooks/useSignIn'

import {useNavigate, Navigate} from 'react-router-dom'

const Login = () => {
  const isAuthenticated = useIsAuthenticated()
  const signIn = useSignIn()
  const navigate = useNavigate()

  /**
   * Login Handle, the callback function onClick from the "Login" button
   *
   * This function demostrate a dummy authentication, using useSignIn function
   */
  const loginHandler = () => {
    // Assuming that, all network Request is successfull, and the user is authenticated

    if (signIn({
      token: '35v3443bn368367n306306wbn407qn420b436b4', //Just a random token
      tokenType: 'Bearer',    // Token type set as Bearer
      authState: {name: 'React User', uid: 123456},   // Dummy auth user state
      expiresIn: 120  // Token Expriration time, in minutes
    })) {
      // If Login Successfull, then Redirect the user to secure route
      navigate('/secure')
    } else {
      // Else, there must be some error. So, throw an error
      alert("Error Occoured. Try Again")
    }
  }
  console.log(isAuthenticated())
  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure dashboard

    return (
      <Navigate to={'/secure'} replace/>
    )
  } else {
    // If not authenticated, use the login flow
    // For Demostration, I'm using just a button to login.
    // In reality, there should be a form, validation, nwetowrk request and other things
    return (
      <button onClick={loginHandler}>Log In!!</button>
    )
  }
}

export default Login
