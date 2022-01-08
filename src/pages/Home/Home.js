import React from 'react';
import Badge from 'react-simple-badges';

import { openInNewTab } from '../../utils';

import './Home.css';

const Home = () => {
    return (
        <div>
            <a
                className="link"
                onClick={() => {
                    openInNewTab(process.env.REACT_APP_CREW_REPO_URL);
                }}
            >
                <Badge name="GitHub" label="Crew" backgroundColor="#000000" />
            </a>
        </div>
    );
};

export default Home;
