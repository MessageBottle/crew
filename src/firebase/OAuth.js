import {
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
    onAuthStateChanged,
} from 'firebase/auth';
import { toast } from 'react-toastify';

import { firebaseApp } from './initialize';
import store from '../UI/store/store';
import { userSignedIn, userSignedOut } from '../UI/store/user/slice';

const provider = new GithubAuthProvider();
provider.addScope();

export const auth = getAuth(firebaseApp);

export function signIn() {
    return signInWithPopup(auth, provider)
        .then(response => {
            return response;
        })
        .catch(error => {
            toast.error(error.message);
            throw error;
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
            throw error;
        });
}

onAuthStateChanged(auth, user => {
    if (user) {
        store.dispatch(userSignedIn(user));
        toast.success(`Welcome! ${user.displayName}`);
    } else {
        store.dispatch(userSignedOut());
    }
});
