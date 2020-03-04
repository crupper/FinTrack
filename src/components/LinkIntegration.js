import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link'
// https://github.com/plaid/react-plaid-link
import { NavItem, NavLink } from "shards-react";
import axios from "axios";

class LinkIntegration extends Component {
    accessToken;
    itemId;
    error;

    handleOnSuccess(token, metadata) {
        // send token to client server
        axios.post("/get_access_token", {
            "accepts": "application/json",
            public_token: token
        }).then((response) => {
            //console.log('Response from Server: ' + JSON.stringify(response));
            this.accessToken = response.data.access_token;
            this.itemId = response.data.item_id;
            this.error = response.data.error;

            if (!this.error) {
                console.log('Success Adding item!');
                console.log('item: ' + this.itemId);
                console.log('token: ' + this.accessToken);
            }
        }).then((test) => {
            axios.get("/balance").then((response) => {
                console.log('Response: ');
                console.log(JSON.stringify(response))
            })
        })
        // Update State to save the itemId and token

        // Test get balance
        //   axios.post("/balance", {
        //       access_token: accessToken
        //   }).then((response) => {
        //       console.log('Response: ');
        //       console.log(JSON.stringify(response))
        //   })


    }
    handleOnExit() {
        // handle the case when your user exits Link
    }
    render() {
        return (
            <NavItem>
                <NavLink>
                    <PlaidLink style={{width: '90%'}} className='btn btn-secondary'
                        clientName="FinPortfolio"
                        env="sandbox"
                        product={["auth", "transactions"]}
                        publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
                        onExit={this.handleOnExit}
                        onSuccess={this.handleOnSuccess}>
                        Add Account
          </PlaidLink>
                </NavLink>
            </NavItem>

        )
    }





}

export default LinkIntegration;



/*
linkHTML = <div>
                    <button id="link-button" onClick={this.plaidLink()}>Link Account</button>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
                    <script
                        src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>
                </div>



    render() {
        return (
            <div>
                <button id="link-button" onClick={this.plaidLink()}>Link Account</button>
                { <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script> }
                    <script
                    src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>
            </div>
        );
    }


    plaidLink() {
        Plaid.create({
            clientName: 'Plaid Quickstart',
            // Optional, specify an array of ISO-3166-1 alpha-2 country
            // codes to initialize Link; European countries will have GDPR
            // consent panel
            countryCodes: ['US'],
            env: 'sandbox',
            // Replace with your public_key from the Dashboard
            key: 'PUBLIC_KEY',
            product: ['transactions'],
            // Optional, use webhooks to get transaction and error updates
            // webhook: 'https://requestb.in',
            // Optional, specify a language to localize Link
            language: 'en',
            // Optional, specify userLegalName and userEmailAddress to
            // enable all Auth features
            // userLegalName: 'John Appleseed',
            // userEmailAddress: 'jappleseed@yourapp.com',
            onLoad: function () {
                // Optional, called when Link loads
            },
            onSuccess: function (public_token, metadata) {
                // Send the public_token to your app server.
                // The metadata object contains info about the institution the
                // user selected and the account ID or IDs, if the
                // Select Account view is enabled.
                fetch.post('/get_access_token', {
                    method: 'POST',
                    public_token: public_token
                });
            },
            onExit: function (err, metadata) {
                // The user exited the Link flow.
                if (err != null) {
                    // The user encountered a Plaid API error prior to exiting.
                    console.log('Error has occurred: ' + err)
                }
                // metadata contains information about the institution
                // that the user selected and the most recent API request IDs.
                // Storing this information can be helpful for support.
            },
            onEvent: function (eventName, metadata) {
                // Optionally capture Link flow events, streamed through
                // this callback as your users connect an Item to Plaid.
                // For example:
                // eventName = "TRANSITION_VIEW"
                // metadata  = {
                //   link_session_id: "123-abc",
                //   mfa_type:        "questions",
                //   timestamp:       "2017-09-14T14:42:19.350Z",
                //   view_name:       "MFA",
                // }
            }
        });
    }

*/