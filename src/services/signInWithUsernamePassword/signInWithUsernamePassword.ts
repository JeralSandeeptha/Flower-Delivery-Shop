import { signInWithEmailAndPassword } from "firebase/auth";
import type { SignInWithUsernamePassword } from "../../types/functions.types";
import { auth } from "../../config/firebase";

const signInWithUsernamePassword = (props: SignInWithUsernamePassword) => {
    props.isLoading.value = true;
    signInWithEmailAndPassword(auth, props.email, props.password)
        .then((userCredential: any) => {
            // Signed in 
            const user = userCredential.user;

            console.log(user);

            props.isSuccess.value = true;
            props.showSuccess();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);

            // navigate to login
            props.router.push('/');
        })
        .catch((error: any) => {
            console.log(error);

            props.isError.value = true;
            props.showError();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);
        });
}

export default signInWithUsernamePassword;