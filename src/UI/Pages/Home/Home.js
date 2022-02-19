import React from 'react';
import { Container } from 'react-bootstrap';
import CrewDetails from '../../components/CrewDetails/CrewDetails';
import CrewList from '../../components/CrewList/CrewList';

import './Home.css';

const Home = () => {
    return (
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <Container>
                            <CrewList />
                            <hr />
                            <CrewList />
                            <hr />
                            <CrewList />
                            <hr />
                            <CrewList />
                        </Container>
                    </div>
                    <div class="col-md-8">
                        <Container>
                            <CrewDetails />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
