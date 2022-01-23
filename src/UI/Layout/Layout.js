import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/Header';

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
            <Header />
            {children}
        </div>
    );
}

export default Layout;
