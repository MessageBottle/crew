import React from 'react';

import Auth from '../../components/Auth/Auth';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation />
            <Auth />
        </div>
    );
};

export default Header;
