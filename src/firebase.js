import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGYfaY1D9Wx-QbwPUeAreGBUydzRIe2wg",
    authDomain: "todo-fcec5.firebaseapp.com",
    projectId: "todo-fcec5",
    storageBucket: "todo-fcec5.appspot.com",
    messagingSenderId: "528254962410",
    appId: "1:528254962410:web:34d96d16765b5173fc2593"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()

export default firebase