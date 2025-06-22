import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import type { UpdatePassword } from "../../types/functions.types";

const updatePassword = (props: UpdatePassword) => {
    props.isLoading.value = true;
    sendPasswordResetEmail(auth, props.email)
        .then(() => {
            props.isSuccess.value = true;
            props.showSuccess();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(error);
            
            props.isError.value = true;
            props.showError();

            setTimeout(() => {
                props.isLoading.value = false;
                props.isSuccess.value = false;
            }, 3000);
        });
}

export default updatePassword;