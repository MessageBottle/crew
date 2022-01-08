import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Avatar } from 'react-profile-avatar';

import { auth, signIn, signOut } from '../../firebase/OAuth';
// import { userSignedIn, userSignedOut } from '../../store/actions';

import 'react-profile-avatar/dist/index.css';

const Auth = () => {
    const [user, initialising] = useAuthState(auth);
    // const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            // dispatch(userSignedIn(user));
            toast.success(`Welcome! ${user.displayName}`);
        } else {
            // dispatch(userSignedOut(null));
        }
    }, [user]);

    console.log(initialising, user);

    return (
        <>
            <button onClick={signIn}>
                {initialising
                    ? 'Waiting for authorization...'
                    : user
                    ? `hello ${user.displayName}`
                    : 'Click me to Authenticate'}
            </button>
            {user ? <button onClick={signOut}>Sign Out</button> : null}
            {user ? (
                <Avatar
                    name={user.displayName}
                    colour='white'
                    imageSrc={user.photoURL}
                />
            ) : null}
        </>
    );
};

export default Auth;
