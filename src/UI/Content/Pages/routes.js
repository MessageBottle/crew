import React from 'react';

const USER = 'USER';

export const ALL_ROUTES = {
    gettingStarted: {
        pageName: 'Getting Started',
        path: '/getting-started',
        PageComponent: React.lazy(() =>
            import('./Getting Started/GettingStarted')
        ),
    },
    home: {
        pageName: 'Home',
        path: '',
        PageComponent: React.lazy(() => import('./Home/Home')),
    },
    aboutUs: {
        pageName: 'About Us',
        path: '/about-us',
        PageComponent: React.lazy(() => import('./About Us/AboutUs')),
    },
    myCrew: {
        pageName: 'My Crew',
        path: '/my-crew',
        PageComponent: React.lazy(() => import('./My Crew/MyCrew')),
        accessibleToRoles: [USER],
    },
};

export const ALL_ROUTES_ARRAY = Object.values(ALL_ROUTES);
