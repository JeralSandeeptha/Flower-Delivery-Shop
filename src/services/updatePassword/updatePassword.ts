import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import type { UpdatePassword } from "../../types/functions.types";

const updatePassword = (props: UpdatePassword) => {
    sendPasswordResetEmail(auth, props.email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export default updatePassword;