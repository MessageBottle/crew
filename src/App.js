import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

import './App.css';

function App() {

    return (
        <Layout>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Layout>
    );
}

export default App;
