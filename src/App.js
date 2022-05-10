import MainApp from './MainApp';
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleOutlined } from '@ant-design/icons'
import {auth} from './firebase'
import React from 'react'
import firebase from './firebase';

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

const SignIn = () => (
  <div id="login-page">
        <div id="login-card">
            <h2>Welcome to To-Do List</h2>
            <div
                className="login-button google"
                onClick={signInWithGoogle}
            >
                <GoogleOutlined /> Sign In with Google
            </div>
        </div>
    </div>
    
)

const App = () => {
  const [user] = useAuthState(auth)

  return user ? <MainApp/> : <SignIn />
}

export default App;
