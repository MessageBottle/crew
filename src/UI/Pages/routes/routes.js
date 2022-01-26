import React from 'react';

export const GUEST_ROUTES = {
    gettingStarted: {
        pageName: 'Getting Started',
        path: '/getting-started',
        PageComponent: React.lazy(() => import('../Home/Home')),
    },
    home: {
        pageName: 'Home',
        path: '/',
        PageComponent: React.lazy(() => import('../Home/Home')),
    },
    aboutUs: {
        pageName: 'About Us',
        path: '/about-us',
        PageComponent: React.lazy(() => import('../Home/Home')),
    },
};

export const USER_ROUTES = {
    myCrew: {
        pageName: 'My Crew',
        path: '/my-crew',
        PageComponent: React.lazy(() => import('../Home/Home')),
    },
};

export const ALL_ROUTES = { ...GUEST_ROUTES, ...USER_ROUTES };
export const ALL_ROUTES_ARRAY = Object.values(ALL_ROUTES);
