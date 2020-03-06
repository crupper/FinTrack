import React, { Component } from 'react';
import { Card, CardBody } from "shards-react";

class BalanceCard extends Component {
    render() {
        return (
            <div>
                <Card  > {/* small className="stats-small" */}
                    <CardBody > {/* className="p-0 d-flex" */}
                        <div>
                            <h1>{this.props.balance.balances.available}</h1>
                            <h3>{this.props.balance.name}</h3>
                            <p>{this.props.balance.subtype}</p>
                            <p>{this.props.balance.official_name}</p>
                            <p>{this.props.balance.account_id}</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default BalanceCard;