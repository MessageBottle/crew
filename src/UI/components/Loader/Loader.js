import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export let setLoading;

const Loader = ({ showContent, children }) => {
    const [isLoading, setIsLoading] = useState(true);

    setLoading = () => {
        setIsLoading(true);
    };

    <>
        {showContent ? (
            children
        ) : isLoading ? (
            <ClipLoader
                loading={true}
                color="#ffffff"
                size={30}
                speedMultiplier={1}
            />
        ) : (
            'Failed'
        )}
    </>;
};
