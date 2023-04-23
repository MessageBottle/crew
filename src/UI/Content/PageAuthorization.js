import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { signIn } from '../../firebase/OAuth';
import Loader from '../components/general/Loader';
import { selectActiveUserProfile } from '../store/user/slice';

const PageAuthorization = ({ accessibleToRoles, children }) => {
    const activeUserProfile = useSelector(store =>
        selectActiveUserProfile(store.user)
    );

    const [loading, setLoading] = useState(false);

    if (accessibleToRoles) {
        if (activeUserProfile.role) {
            if (accessibleToRoles.includes(activeUserProfile.role)) {
                return children;
            } else {
                return <div>You Don't Have Access</div>;
            }
        } else {
            return (
                <div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            Please{' '}
                            <button
                                onClick={() => {
                                    setLoading(true);
                                    signIn().finally(() => {
                                        setLoading(false);
                                    });
                                }}
                            >
                                Sign In
                            </button>
                        </>
                    )}
                </div>
            );
        }
    } else {
        return children;
    }
};

export default PageAuthorization;
