import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

import { firebaseApp } from './initialize';

const provider = new GithubAuthProvider();
provider.addScope();

export const auth = getAuth(firebaseApp);

export function signIn() {
    signInWithPopup(auth, provider).catch(error => {
        toast.error(error.message);
    });
}

export function signOut() {
    auth.signOut()
        .then(() => {
            toast.success('Logged Out!');
        })
        .catch(error => {
            toast.error(error.message);
        });
}
