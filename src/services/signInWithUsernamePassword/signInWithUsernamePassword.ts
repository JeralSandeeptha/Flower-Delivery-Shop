import { signInWithEmailAndPassword } from "firebase/auth";
import type { SignInWithUsernamePassword } from "../../types/functions.types";
import { auth } from "../../config/firebase";

const signInWithUsernamePassword = (props: SignInWithUsernamePassword) => {
    signInWithEmailAndPassword(auth, props.email, props.password)
        .then((userCredential: any) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error: any) => {
            console.log(error);
        });
}

export default signInWithUsernamePassword;