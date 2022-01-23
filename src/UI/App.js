import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Home />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
