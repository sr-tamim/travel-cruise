import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const register = (auth, name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(() => updateProfile(auth.currentUser, { displayName: name }))
        .then(() => auth.reload());
};

export default register;
