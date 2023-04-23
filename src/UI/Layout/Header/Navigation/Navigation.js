import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ALL_ROUTES_ARRAY } from '../../../Content/Pages/routes';

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            {ALL_ROUTES_ARRAY.map(route =>
                route.path === location.pathname ? (
                    <div key={route.path}>{route.pageName}</div>
                ) : (
                    <div
                        key={route.path}
                        onClick={() => {
                            navigate(route.path);
                        }}
                    >
                        {route.pageName}
                    </div>
                )
            )}
        </div>
    );
};

export default Navigation;
