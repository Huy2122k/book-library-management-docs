import { useState } from 'react';
import { authContext } from './use-auth';
// Add your Firebase credentials

function useProvideAuth() {
    const [user, setUser] = useState(null);
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.

    const sendPasswordResetEmail = (email) => {
        // return firebase
        //     .auth()
        //     .sendPasswordResetEmail(email)
        //     .then(() => {
        //         return true;
        //     });
    };
    const confirmPasswordReset = (code, password) => {
        // return firebase
        //     .auth()
        //     .confirmPasswordReset(code, password)
        //     .then(() => {
        //         return true;
        //     });
    };

    // Return the user object and auth methods
    return {
        user,
        setUser,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}

export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}
