import { createUserWithEmailAndPassword } from "firebase/auth";
import type { RegisterUserWithEmailAndPassword } from "../../types/functions.types";
import { auth } from "../../config/firebase";

const registerUserWithEmailAndPassword = (props: RegisterUserWithEmailAndPassword) => {
    createUserWithEmailAndPassword(auth, props.email, props.password)
        .then((userCredential: any) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error: any) => {
            console.log(error);
        });
}

export default registerUserWithEmailAndPassword;