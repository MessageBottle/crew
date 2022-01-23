import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

import { firebaseApp } from './initialize';

const provider = new GithubAuthProvider();
provider.addScope();

export const auth = getAuth(firebaseApp);

export function signIn() {
    return signInWithPopup(auth, provider)
        .then(response => {
            toast.success('Signed In!');
            return response;
        })
        .catch(error => {
            toast.error(error.message);
        });
}

export function signOut() {
    return auth
        .signOut()
        .then(response => {
            toast.success('Signed Out!');
            return response;
        })
        .catch(error => {
            toast.error(error.message);
        });
}
