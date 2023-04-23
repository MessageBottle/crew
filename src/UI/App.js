import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Layout from './Layout/Layout';
import Content from './Content/Content';
import Loader from './components/general/Loader';

function App() {
    return (
        <Provider store={store}>
            <HashRouter basename={process.env.REACT_APP_CREW_BASE_URL}>
                <Layout>
                    <Suspense fallback={<Loader />}>
                        <Content />
                    </Suspense>
                </Layout>
            </HashRouter>
        </Provider>
    );
}

export default App;
