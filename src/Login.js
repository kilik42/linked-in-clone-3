import React, { useState } from 'react'
// import { auth } from './firebase'
import "./Login.css"
import { login } from './features/userSlice';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { updateProfile } from "firebase/auth";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();
  
  const loginToApp = (e) => {
    console.log("login");
    e.preventDefault();

  }

  const register = () => {
    console.log("register");
    if (!name) {
      return alert("please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then (() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic,

        })
        );
      });

  }).catch(error => alert(error));
  }
  


  return (
    <div className = "login">
      <img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" />
      <h1>you are not logged in.</h1>
      <h2>please login to continue</h2>
      <form action="">

        <input type="text" placeholder="Full name (required if registering)" 
        value={name} onChange={e => setName(e.target.value)}/>
        
        {/* <input type="text" placeholder="Profile pic URL (optional)" 
        value={profilePic} onChange={e => setProfilePic(e.target.value)}
        /> */}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit" onClick={loginToApp}>Sign In</button>


      </form>
      <p>
        not a member?
        <span className="login__register" onClick = {register}> Register Now</span>
      </p>
    </div>
  )
}

export default Login
