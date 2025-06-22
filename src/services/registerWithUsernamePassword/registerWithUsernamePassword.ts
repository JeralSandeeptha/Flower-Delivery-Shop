import { createUserWithEmailAndPassword } from "firebase/auth";
import type { RegisterUserWithEmailAndPassword } from "../../types/functions.types";
import { auth } from "../../config/firebase";

const registerUserWithEmailAndPassword = (props: RegisterUserWithEmailAndPassword) => {
    props.isLoading.value = true;
    createUserWithEmailAndPassword(auth, props.email, props.password)
        .then((userCredential: any) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);

            props.isSuccess.value = true;
            props.showSuccess();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);

            // navigate to login
            props.router.push('/login');
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

export default registerUserWithEmailAndPassword;