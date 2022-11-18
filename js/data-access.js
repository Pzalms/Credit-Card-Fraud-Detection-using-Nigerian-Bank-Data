let customerData = JSON.parse(localStorage.customerData);

function updateData() {
	localStorage.customerData = JSON.stringify(customerData);
}

function addTransaction(obj) {
	let transactions = [];

	if (localStorage.transactions) {
		transactions = JSON.parse(localStorage.transactions);
	}
	transactions.push(obj);
	localStorage.transactions = JSON.stringify(transactions);
}

function account(number) {
	for (let acc of customerData) {
		if (acc.accountNumber === number) {
			return acc;
		}
	}
}

function Transaction(accountNumber, domain, type, amount) {
	this.accountNumber = accountNumber;
	this.domain = domain;
	this.type = type;
	this.amount = amount;
	this.isFraud = function () {
		if (type === "Credit" && amount > account(accountNumber).creditLimit) {
			return true;
		}
		if (type === "Debit" && amount > account(accountNumber).averageIncome) {
			return true;
		}
		if (type === "Debit" && amount > account(accountNumber).balance) {
			return true;
		}
		return false;
	};
}
