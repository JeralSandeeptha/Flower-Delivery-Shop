import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const user = auth.currentUser;

            if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
            
            }
        } else {
            // User is signed out
            // ...
        }
    });    
}

export default getCurrentUser;