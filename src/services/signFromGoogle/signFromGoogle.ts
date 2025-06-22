import { auth } from "../../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import type { RegisterUserWithGoogle } from "../../types/functions.types";

const provider = new GoogleAuthProvider();

const signFromGoogle = (props: RegisterUserWithGoogle) => {
    props.isLoading.value = true;
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);

            props.isSuccess.value = true;
            props.showSuccess();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);

            // navigate to login
            props.router.push('/login');
           
        }).catch((error: any) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error);

            props.isError.value = true;
            props.showError();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);
        });
}

export default signFromGoogle;