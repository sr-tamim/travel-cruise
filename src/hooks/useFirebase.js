import axios from "axios";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInit from "../firebase/firebase.config";
import register from "../firebase/register";
import signInEmail from "../firebase/sign-in-email";
import signInGoogle from "../firebase/sign-in-google";

firebaseInit(); // initialize firebase
const auth = getAuth(); // get auth info


// this custom hook contains all of firebase user related info
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [loadingUserOnReload, setLoadingUserOnRelaod] = useState(true);
    const [usrError, setUsrError] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);

    const modifyError = (error) => {
        if (error.message.startsWith('Firebase: Error')) {
            const modifiedError = error.message.split('/')[1].split('-').join(' ').split(')')[0];
            setUsrError(modifiedError)
        }
    }


    onAuthStateChanged(auth, usr => {
        usr ? setUser(usr) : user && setUser(null);
        usr && setUsrError(null);
        loadingUserOnReload && setLoadingUserOnRelaod(false);
    })

    // save user info in database
    function saveUserToDB({ email }) {
        axios.post('https://travel-cruise-srt-server.herokuapp.com/users', { email, role: 'public' })
            .catch(err => console.log(err))
    }


    // starting authentication process
    function authStart() {
        setAuthLoading(true)
        setUsrError(null)
    }

    // authentication functions
    const logOut = () => {
        signOut(auth).catch(err => modifyError(err))
    }
    const googleLogin = () => {
        authStart()
        signInGoogle(auth).then(() => saveUserToDB(auth.currentUser))
            .catch(err => modifyError(err))
            .finally(() => setAuthLoading(false))
    }
    const signUp = (name, email, password) => {
        authStart()
        register(auth, name, email, password)
            .then(() => saveUserToDB(auth.currentUser))
            .catch(err => modifyError(err))
            .finally(() => setAuthLoading(false));
    }
    const loginEmail = (email, password) => {
        authStart();
        signInEmail(auth, email, password).catch(err => modifyError(err))
            .finally(() => setAuthLoading(false))
    }

    return {
        user, setUser, loadingUserOnReload, authLoading, setAuthLoading,
        usrError, setUsrError,
        logOut, googleLogin, signUp, loginEmail
    }
};

export default useFirebase;