import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInit from "../firebase/firebase.config";
import signInGoogle from "../firebase/sign-in-google";

firebaseInit();
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [usrError, setUsrError] = useState(null);
    console.log(user);

    onAuthStateChanged(auth, usr => {
        usr ? setUser(usr) : user && setUser(null);
        usr && setUsrError(null);
        userLoading && setUserLoading(false);
    })


    const logOut = () => signOut(auth).catch(err => setUsrError(err));
    const googleLogin = () => signInGoogle(auth).catch(err => setUsrError(err));

    return {
        user, setUser,
        usrError, setUsrError,
        logOut, googleLogin
    }
};

export default useFirebase;