import { signInWithEmailAndPassword } from "firebase/auth";
const signInEmail = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
};

export default signInEmail;