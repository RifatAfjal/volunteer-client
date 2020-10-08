import React, { useContext, useState } from 'react';
import './Auth.css';
import logo from '../../Images/Group 1329.png';
import google from '../../Images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const GoogleSignin = () => {
    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
    });

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };    
    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                setUser({
                    isSignedIn: true,
                    name: user.displayName,
                    email: user.email,
                })
                setLoggedInUser({
                    isSignedIn: true,
                    name: user.displayName,
                    email: user.email,
                })
                storeAuthToken()
                history.replace(from)
            })
        .catch(error => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(idToken => {
            sessionStorage.setItem("token", idToken)
        })
        .catch(error => {
            
        });
    }
    return (
        <div className="container d-flex justify-content-center align-items-center loginContainer">
           <div className="d-flex justify-content-center flex-column loginCard">
                <img src={logo} className="volunteerLogo" alt="volunteerLogo"/>
                <div className="card">
                    <h1 className="text-center mb-4">Login</h1>
                    <button onClick={handleSignIn} className="d-flex justify-content-center align-items-center p-2 loginBtn">
                        <img src={google} className="mr-3 icon" alt="googleLogo"/>
                        <p className="pt-3">Continue with Google</p>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default GoogleSignin;