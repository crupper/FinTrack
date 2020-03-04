import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const express = require('express');
// import Server from './plaid/server'

//import {REACT_APP_PLAID_CLIENT_ID, REACT_APP_PLAID_SECRET, REACT_APP_PLAID_PUBLIC_KEY, REACT_APP_PLAID_ENV} from process.env;

// class Index extends React.Component {
    // render() {
        ReactDOM.render(<App />, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();  
    // }
// }




// let ACCESS_TOKEN = null;
// let PUBLIC_TOKEN = null;
// let ITEM_ID = null;

// let app = express();
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json());

// let client = new plaid.Client(
//     REACT_APP_PLAID_CLIENT_ID,
//     REACT_APP_PLAID_SECRET,
//     REACT_APP_PLAID_PUBLIC_KEY,
//     plaid.environments[REACT_APP_PLAID_ENV],
//     { version: '2019-05-29' }
// );

// app.post('/get_access_token', function (request, response, next) {
//     PUBLIC_TOKEN = request.body.public_token;
//     console.log('Recieved Public token: ' + PUBLIC_TOKEN)
//     client.exchangePublicToken(PUBLIC_TOKEN, function (error,
//         tokenResponse) {
//         if (error != null) {
//             console.log('Could not exchange public_token!' + '\n' +
//                 error);
//             return response.json({ error: msg });
//         }
//         ACCESS_TOKEN = tokenResponse.access_token;
//         ITEM_ID = tokenResponse.item_id;
//         console.log('Access Token: ' + ACCESS_TOKEN);
//         console.log('Item ID: ' + ITEM_ID);
//         response.json({ 'error': false });
//     });
// });

// const port = process.env.REACT_APP_PORT || 5000;
// app.listen(port);

// console.log('App is listening on port ' + port);