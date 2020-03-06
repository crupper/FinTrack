

const chaseAccounts = {
	// "data": {
		"balance": [{
			"account_id": "8krRy7jyq4C7KGkaWjnvIokBNXJowMsw8LvqL",
			"balances": {
				"available": 100,
				"current": 110,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "0000",
			"name": "Plaid Checking",
			"official_name": "Plaid Gold Standard 0% Interest Checking",
			"subtype": "checking",
			"type": "depository"
		}, {
			"account_id": "E5QrlABlvRFBDNopqdVbuzmNQjBz5kfXmkZbl",
			"balances": {
				"available": 200,
				"current": 210,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "1111",
			"name": "Plaid Saving",
			"official_name": "Plaid Silver Standard 0.1% Interest Saving",
			"subtype": "savings",
			"type": "depository"
		}, {
			"account_id": "W5x4qZyqzwFZoAD31lvBtqVZeXAqNnIlj1ogj",
			"balances": {
				"available": null,
				"current": 1000,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "2222",
			"name": "Plaid CD",
			"official_name": "Plaid Bronze Standard 0.2% Interest CD",
			"subtype": "cd",
			"type": "depository"
		}, {
			"account_id": "ARP9ygkyp5IxN7p8zL4yuplmdgwpKru15ARzx",
			"balances": {
				"available": null,
				"current": 410,
				"iso_currency_code": "USD",
				"limit": 2000,
				"unofficial_currency_code": null
			},
			"mask": "3333",
			"name": "Plaid Credit Card",
			"official_name": "Plaid Diamond 12.5% APR Interest Credit Card",
			"subtype": "credit card",
			"type": "credit"
		}, {
			"account_id": "G5MkKqxKobFnLQ1jryVXCpMdkXapD7u1oPJkK",
			"balances": {
				"available": 43200,
				"current": 43200,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "4444",
			"name": "Plaid Money Market",
			"official_name": "Plaid Platinum Standard 1.85% Interest Money Market",
			"subtype": "money market",
			"type": "depository"
		}, {
			"account_id": "nzrJxPQxwmILlz9V5NAPInewQ9jnJbC6QWPvV",
			"balances": {
				"available": null,
				"current": 320.76,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "5555",
			"name": "Plaid IRA",
			"official_name": null,
			"subtype": "ira",
			"type": "investment"
		}, {
			"account_id": "bJMjPlzPgeHdKBk65mblSwepMWZw37SV7Zg8b",
			"balances": {
				"available": null,
				"current": 23631.9805,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "6666",
			"name": "Plaid 401k",
			"official_name": null,
			"subtype": "401k",
			"type": "investment"
		}, {
			"account_id": "mkK93NX3bWC1Rkx3rmXNIPmeJ8DPjECLXdR6Z",
			"balances": {
				"available": null,
				"current": 65262,
				"iso_currency_code": "USD",
				"limit": null,
				"unofficial_currency_code": null
			},
			"mask": "7777",
			"name": "Plaid Student Loan",
			"official_name": null,
			"subtype": "student",
			"type": "loan"
		}]
	// }
}

// const chaseAccounts = () => {
    // {"data":{"balance":[{"account_id":"8krRy7jyq4C7KGkaWjnvIokBNXJowMsw8LvqL","balances":{"available":100,"current":110,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"0000","name":"Plaid Checking","official_name":"Plaid Gold Standard 0% Interest Checking","subtype":"checking","type":"depository"},{"account_id":"E5QrlABlvRFBDNopqdVbuzmNQjBz5kfXmkZbl","balances":{"available":200,"current":210,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"1111","name":"Plaid Saving","official_name":"Plaid Silver Standard 0.1% Interest Saving","subtype":"savings","type":"depository"},{"account_id":"W5x4qZyqzwFZoAD31lvBtqVZeXAqNnIlj1ogj","balances":{"available":null,"current":1000,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"2222","name":"Plaid CD","official_name":"Plaid Bronze Standard 0.2% Interest CD","subtype":"cd","type":"depository"},{"account_id":"ARP9ygkyp5IxN7p8zL4yuplmdgwpKru15ARzx","balances":{"available":null,"current":410,"iso_currency_code":"USD","limit":2000,"unofficial_currency_code":null},"mask":"3333","name":"Plaid Credit Card","official_name":"Plaid Diamond 12.5% APR Interest Credit Card","subtype":"credit card","type":"credit"},{"account_id":"G5MkKqxKobFnLQ1jryVXCpMdkXapD7u1oPJkK","balances":{"available":43200,"current":43200,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"4444","name":"Plaid Money Market","official_name":"Plaid Platinum Standard 1.85% Interest Money Market","subtype":"money market","type":"depository"},{"account_id":"nzrJxPQxwmILlz9V5NAPInewQ9jnJbC6QWPvV","balances":{"available":null,"current":320.76,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"5555","name":"Plaid IRA","official_name":null,"subtype":"ira","type":"investment"},{"account_id":"bJMjPlzPgeHdKBk65mblSwepMWZw37SV7Zg8b","balances":{"available":null,"current":23631.9805,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"6666","name":"Plaid 401k","official_name":null,"subtype":"401k","type":"investment"},{"account_id":"mkK93NX3bWC1Rkx3rmXNIPmeJ8DPjECLXdR6Z","balances":{"available":null,"current":65262,"iso_currency_code":"USD","limit":null,"unofficial_currency_code":null},"mask":"7777","name":"Plaid Student Loan","official_name":null,"subtype":"student","type":"loan"}]},"status":200,"statusText":"OK","headers":{"connection":"close","content-encoding":"gzip","content-type":"application/json; charset=utf-8","date":"Fri, 06 Mar 2020 00:09:44 GMT","etag":"W/\"93e-jGn052kNxBUnTajG8N1voLakByQ\"","transfer-encoding":"chunked","vary":"Accept-Encoding","x-powered-by":"Express"},"config":{"url":"/balance","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1},"request":{}}
    
// }

// export default chaseAccounts;
module.exports = chaseAccounts;