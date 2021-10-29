import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const signInGoogle = (auth) => {
    return signInWithPopup(auth, provider);
};

export default signInGoogle;