import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Button, Dropdown, Spinner } from 'react-bootstrap';

import { auth, signIn, signOut } from '../../../firebase/OAuth';
import {
    getUserFromStore,
    userSignedIn,
    userSignedOut,
} from '../../store/features/userSlice';

import { openInNewTab } from '../../utils/utils';

import './Auth.css';
import { postUserId } from '../../../firebase/actions';

const Auth = () => {
    const [user, initialising] = useAuthState(auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(userSignedIn(user));
            toast.success(`Welcome! ${user.displayName}`);
        } else {
            dispatch(userSignedOut());
        }
    }, [user, dispatch]);

    return (
        <Dropdown align="end">
            {user ? (
                <img src={user.photoURL} className="avatar" alt="avatar" />
            ) : (
                <Button
                    variant="outline-dark"
                    onClick={signIn}
                    disabled={initialising}
                >
                    {initialising ? (
                        <Spinner animation="border" size="sm" variant="dark" />
                    ) : (
                        'Sign In'
                    )}
                </Button>
            )}
            <Dropdown.Toggle
                split
                variant="outline-dark"
                id="profile-dropdown-toggle"
            />

            <Dropdown.Menu variant="light">
                <Dropdown.Item
                    onClick={() => {
                        openInNewTab(process.env.REACT_APP_PROJECT_REPO_URL);
                    }}
                >
                    Report a bug! (on GitHub)
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        postUserId(() => {
                            const userAuth = getUserFromStore().auth;
                            return {
                                name: userAuth.displayName,
                                email: userAuth.email,
                            };
                        });
                    }}
                >
                    {`Add user to dev DB, login-staus: ${!!user}`}
                </Dropdown.Item>
                {user ? (
                    <>
                        <Dropdown.Header>{user.displayName}</Dropdown.Header>
                        <Dropdown.Item onClick={signOut}>
                            Sign out
                        </Dropdown.Item>
                    </>
                ) : null}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Auth;
