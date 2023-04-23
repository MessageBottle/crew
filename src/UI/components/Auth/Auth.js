import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap';

import { signIn, signOut } from '../../../firebase/OAuth';
import {
    selectActiveUserProfile,
    selectIsUserSignedIn,
} from '../../store/user/slice';
import { openInNewTab } from '../../utils/utils';
import Loader from '../general/Loader';

import './Auth.css';

const Auth = () => {
    const isUserSignedIn = useSelector(store =>
        selectIsUserSignedIn(store.user)
    );

    const activeUserProfile = useSelector(store =>
        selectActiveUserProfile(store.user)
    );

    const [loading, setLoading] = useState(false);

    return (
        <Dropdown align="end">
            {isUserSignedIn ? (
                <img
                    src={activeUserProfile.photoURL}
                    className="avatar"
                    alt="avatar"
                />
            ) : (
                <Button
                    variant="outline-dark"
                    onClick={() => {
                        setLoading(true);
                        signIn().finally(() => {
                            setLoading(false);
                        });
                    }}
                    disabled={loading}
                >
                    {loading ? <Loader /> : 'Sign In'}
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
                {isUserSignedIn ? (
                    <>
                        <Dropdown.Header>
                            {activeUserProfile.displayName}
                        </Dropdown.Header>
                        <Dropdown.Item
                            onClick={() => {
                                setLoading(true);
                                signOut().finally(() => {
                                    setLoading(false);
                                });
                            }}
                        >
                            Sign out
                        </Dropdown.Item>
                    </>
                ) : null}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Auth;
