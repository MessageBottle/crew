import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import { auth, signIn, signOut } from '../../../firebase/OAuth';
// import { userSignedIn } from '../../store/actions';

import { Button, Dropdown, Spinner } from 'react-bootstrap';
import { openInNewTab } from '../../utils/utils';

import './Auth.css';

const Auth = () => {
    const [user, initialising] = useAuthState(auth);
    // const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            // dispatch(userSignedIn(user));
            toast.success(`Welcome! ${user.displayName}`);
        }
    }, [user]);

    console.log(initialising, user);

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
