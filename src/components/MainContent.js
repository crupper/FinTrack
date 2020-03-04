import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import { Card, CardBody } from "shards-react";
// import LinkIntegration from './LinkIntegration';
import TestComponent from './TestComponent';

class MainContent extends Component {
    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    {/* <PageTitle title="Overview" subtitle="Dashboard" className="text-sm-left mb-3" /> */}
                    Dashboard
                </Row>
                <Row>
                    <Col lg="8" md="12" sm="12" className="mb-4">
                    <Card small className="stats-small">
                            <CardBody className="p-0 d-flex">
                                Test Card 1
                                {/* <LinkIntegration /> */}
                                <br />
                                {/* <TestComponent /> */}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="col-lg mb-4">
                        <Card small className="stats-small">
                            <CardBody className="p-0 d-flex">
                                Test Card 2
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainContent;