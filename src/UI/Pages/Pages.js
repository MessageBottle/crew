import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ALL_ROUTES_ARRAY } from './routes/routes';

const Pages = () => (
    <Routes>
        {ALL_ROUTES_ARRAY.map(parentRoute => (
            <Route
                key={parentRoute.path}
                path={parentRoute.path}
                element={<parentRoute.PageComponent />}
            />
        ))}
    </Routes>
);

export default Pages;
