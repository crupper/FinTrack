import React, { Component } from 'react';
import { Row, Col } from "shards-react";
import { Card, CardBody } from "shards-react";
import axios from "axios";
const formatter = require('../Utils/Format');

class NetWorthCard extends Component {

    constructor() {
        super();
        this.state = {
            net_worth: 0
        }
    }

    componentDidMount() {
        let networth = 0;
        axios.get("/networth").then((response) => {
            console.log('Response: ');
            console.log(JSON.stringify(response))
            networth = response.data.net_worth;
            console.log('Net worth from server: ' + networth);
            // return response.data.net_worth;
            networth = formatter(networth);
            this.setState({
                net_worth: networth
            });
        })
    }


    render() {
        return (
            <div>
                <Row>
                    <Col className="col-lg mb-3">
                        <Card small className="stats-small" style={{width: '20%'}}>
                            <CardBody>
                                <h3>Net Worth</h3>
                                <h1>${this.state.net_worth}</h1>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NetWorthCard;