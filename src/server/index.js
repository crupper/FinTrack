// 'use strict';

let util = require('util');
let express = require('express');
const bodyParser = require('body-parser');
// const moment = require('moment');
const plaid = require('plaid');
//const cors = require('cors');
var path = require('path');

// import {REACT_APP_PLAID_CLIENT_ID, REACT_APP_PLAID_SECRET, REACT_APP_PLAID_PUBLIC_KEY, REACT_APP_PLAID_ENV} from process.env; 

// let REACT_APP_PLAID_CLIENT_ID = process.env.REACT_APP_PLAID_CLIENT_ID;
// console.log('REACT_APP_PLAID_CLIENT_ID: ' + REACT_APP_PLAID_CLIENT_ID);
// console.log(process.env);
// let REACT_APP_PLAID_SECRET = process.env.REACT_APP_PLAID_SECRET;
// let REACT_APP_PLAID_PUBLIC_KEY = process.env.REACT_APP_PLAID_PUBLIC_KEY;
// let REACT_APP_PLAID_ENV = process.env.REACT_APP_PLAID_ENV;



//
let REACT_APP_PORT = 4000
let REACT_APP_PLAID_CLIENT_ID = '5e2cd1b9c9cc5400129f3d1b'
let REACT_APP_PLAID_SECRET = 'def6e0f2f6caefdafb9efa9338e0cb'
let REACT_APP_PLAID_PUBLIC_KEY = 'd364b0b712f1f66b7a2c4e749f166e'
let REACT_APP_PLAID_PRODUCTS = 'transactions'
let REACT_APP_PLAID_COUNTRY_CODES = 'US,CA,GB,FR,ES,IE'
let REACT_APP_PLAID_ENV = 'sandbox'
//
const testChaseItemID = 'K7PR4Nxgq4ivEpqWZkg4f1xVXBGo6XfV8zklA';
const testChaseAccessToken = 'access-sandbox-c5cdf637-02e1-43b1-8ca4-a5a0fe9195b8';
//

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

let app = express();
app.use(express.static('public'));
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// app.use(cors);

// app.use(express.static(path.join(__dirname, 'client/build')));

let client = new plaid.Client(
    REACT_APP_PLAID_CLIENT_ID,
    REACT_APP_PLAID_SECRET,
    REACT_APP_PLAID_PUBLIC_KEY,
    plaid.environments[REACT_APP_PLAID_ENV],
    { version: '2019-05-29' }
);

// Print response
let prettyPrintResponse = response => {
    console.log(util.inspect(response, { colors: true, depth: 4 }));
};

app.post('/get_access_token', function (request, response, next) {
    PUBLIC_TOKEN = request.body.public_token;
    console.log('Request:');
    prettyPrintResponse(request.body);

    client.exchangePublicToken(PUBLIC_TOKEN, function (error,
        tokenResponse) {
        if (error != null) {
            console.log('Could not exchange public_token!' + '\n' +
                error);
            return response.json({ error: msg });
        }
        ACCESS_TOKEN = tokenResponse.access_token;
        ITEM_ID = tokenResponse.item_id;
        console.log('Response:');
        prettyPrintResponse(tokenResponse);
        response.json({
            access_token: ACCESS_TOKEN,
            item_id: ITEM_ID,
            error: null,
        });
    });
});

app.get('/get', (req, res, next) => {
    console.log('get');
    res.json({ 'text': true });
})

app.post('/get_token', (token, metadata) => {
    console.log('Get Token');
    console.log('Token: ' + token);
    return "Success";
})

app.get('/balance', (request, response, next) => {
    //let token = request.body.access_token;
    console.log('Access Token used to get balance: ' + ACCESS_TOKEN);
    // Pull real-time balance information for each account associated
    // with the Item
    client.getBalance(ACCESS_TOKEN, (err, result) => {
        // Handle err
        const accounts = result.accounts;
        prettyPrintResponse(accounts);

        response.json({
            "balance": accounts
        })
    });
    
})


//
app.get('/', function (req, res) {
    console.log('hit root')
    res.sendFile(path.join(__dirname, '../', 'index.html'));
    console.log('Sending to:' + path.join(__dirname, '../', 'index.html'))
});

app.get('/ping', function (req, res) {
    console.log('ping pong')
    return res.send('pong');
});




/**
 * Get Net worth
 */
app.get('/networth', (request, response, next) => {
    //let token = request.body.access_token;
    console.log('Access Token used to get balance: ' + ACCESS_TOKEN);
    // Pull real-time balance information for each account associated
    // with the Item
    client.getBalance(testChaseAccessToken, (err, result) => { // replace with real token
        prettyPrintResponse(result);
        // Handle err
        const accounts = result.accounts;
        //prettyPrintResponse(accounts);
        let networth = 0;
        // let balances = accounts.data.balance;
        let array = accounts.map((accountBalance) => {
            if(accountBalance.type == 'depository' || accountBalance.type == 'investment'){
                networth = networth + accountBalance.balances.current;
            } else if(accountBalance.type == 'credit' || accountBalance.type == 'loan'){
                networth = networth - accountBalance.balances.current;
            }
            
        })
        console.log('Calculated NW: ' + networth);

        response.json({
            "net_worth": networth
        })
    });
    
})

app.listen(REACT_APP_PORT);

console.log('App is listening on port ' + REACT_APP_PORT);

