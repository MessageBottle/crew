import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import store from './store/store';
import Layout from './Layout/Layout';
import Pages from './Pages/Pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.REACT_APP_CREW_BASE_URL}>
                <Layout>
                    <Suspense
                        fallback={<Spinner animation="border" variant="dark" />}>
                        <Pages />
                    </Suspense>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
