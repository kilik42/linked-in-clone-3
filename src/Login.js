import React from 'react'
import "./Login.css"
function Login() {

  const register = () => {
    console.log("register");


  } 

  const loginToApp = () => {
    console.log("login");
      
  }

  return (
    <div className = "login">
      <img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" />
      <h1>you are not logged in.</h1>
      <h2>please login to continue</h2>
      <form action="">

        <input type="text" placeholder="Full name (required if registering)" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>


      </form>
      <p>
        not a member?
        <span className="login__register" onClick = {register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
