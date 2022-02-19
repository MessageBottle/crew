import { doc, getFirestore } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { firebaseApp } from './initialize';
import { toast } from 'react-toastify';

import { getUserFromStore } from '../UI/store/features/userSlice';

const database = getFirestore(firebaseApp);

const USERS_FB_COLLECTION = 'users';

export async function postUserId(payloadFn) {
    try {
        await setDoc(
            doc(database, USERS_FB_COLLECTION, getUserFromStore().auth.uid),
            payloadFn()
        );
    } catch (error) {
        toast.error('Unauthenticated user, please sign in!');
        console.error(error);
    }
}
