import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageAuthorization from './PageAuthorization';

import { ALL_ROUTES_ARRAY } from './Pages/routes';

const Content = () => (
    <Routes>
        {ALL_ROUTES_ARRAY.map(route => (
            <Route
                key={route.path}
                path={route.path}
                element={
                    <PageAuthorization
                        accessibleToRoles={route.accessibleToRoles}
                    >
                        <route.PageComponent />
                    </PageAuthorization>
                }
            />
        ))}
    </Routes>
);

export default Content;
