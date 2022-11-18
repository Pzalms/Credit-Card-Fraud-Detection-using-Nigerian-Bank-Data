let customerData = [
	new Customer(
		"1275734409",
		"364",
		"755189",
		15000,
		2000000,
		500000,
		330788,
		170919
	),
	new Customer(
		"1271246193",
		"401",
		"513706",
		15000,
		2000000,
		200000,
		327052,
		329353
	),

	new Customer(
		"1242290165",
		"266",
		"648473",
		120000,
		4000000,
		500000,
		258231,
		292922
	)

];
localStorage.customerData = JSON.stringify(customerData);
localStorage.removeItem("transactions");

function Customer(
	accountNumber,
	cvv,
	cardNumber,
	atmLimit,
	posWebLimit,
	creditLimit,
	balance,
	averageIncome
) {
	this.accountNumber = accountNumber;
	this.cvv = cvv;
	this.cardNumber = cardNumber;
	this.atmLimit = atmLimit;
	this.posWebLimit = posWebLimit;
	this.creditLimit = creditLimit;
	this.balance = balance;
	this.averageIncome = averageIncome;
	this.active = true;
}
