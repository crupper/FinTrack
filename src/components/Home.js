import React, { Component } from 'react';
import MainNavbar from './Navbar/MainNavbar';
import MainContent from './MainContent';
import Footer from './Footer';

import { Container, Row, Col } from "shards-react";
import MainSideBar from './SideBar/MainSideBar';

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <MainSideBar />
                    <Col
                        className="main-content p-0"
                        lg={{ size: 10, offset: 2 }}
                        md={{ size: 9, offset: 3 }}
                        sm="12"
                        tag="main">
                        <div>
                            <MainNavbar />
                            <MainContent />
                            <Footer />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Home;