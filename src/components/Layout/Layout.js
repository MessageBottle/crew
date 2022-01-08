import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import Auth from '../Auth/Auth';

import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
    return (
        <div className="Layout">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Slide}
            />
            <Auth />
            {children}
        </div>
    );
}

export default Layout;
