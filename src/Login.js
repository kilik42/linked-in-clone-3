import React from 'react'
import "./Login.css"
function Login() {
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
        <button type="submit">Sign In</button>

        
      </form>
    </div>
  )
}

export default Login
