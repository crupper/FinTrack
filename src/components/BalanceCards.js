import React, { Component } from 'react';
import BalanceCard from './BalanceCard';


let chaseAccounts = require('../testData/balanceChase');


class BalanceCards extends Component {

    getJSON() {
        let array = chaseAccounts.balance;
        // for(let key in chaseAccounts) {

        // }
    }

    render() {
        let array = chaseAccounts.balance;
        const cardItems = array.map((data) => 
            <BalanceCard balance={data} key={data.account_id} />
        )
        return (
            <div>
                {cardItems}
            </div>
        );
    }
}

export default BalanceCards;