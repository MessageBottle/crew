import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Avatar from 'react-avatar';

import { auth, signIn, signOut } from '../../../firebase/OAuth';
// import { userSignedIn } from '../../store/actions';

import { Button, Dropdown, Spinner } from 'react-bootstrap';
import { openInNewTab } from '../../utils/utils';

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
        <div>
            <Dropdown align="end">
                {user ? (
                    <Avatar src={user.photoURL} size={40} round />
                ) : (
                    <Button
                        variant="outline-dark"
                        onClick={signIn}
                        disabled={initialising}
                    >
                        {initialising ? (
                            <Spinner
                                animation="border"
                                size="sm"
                                variant="dark"
                            />
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
                            openInNewTab(
                                process.env.REACT_APP_PROJECT_REPO_URL
                            );
                        }}
                    >
                        Report a bug!
                    </Dropdown.Item>
                    {user ? (
                        <>
                            <Dropdown.Header>
                                {user.displayName}
                            </Dropdown.Header>
                            <Dropdown.Item onClick={signOut}>
                                Sign out
                            </Dropdown.Item>
                        </>
                    ) : null}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Auth;
