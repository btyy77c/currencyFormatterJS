var currencies = require('./currencies')

function setCurrency(number, currencyCode) {
	if (currencies[currencyCode]) {
  	return currencies[currencyCode].formatCurrency(number);
  } else {
  	return standardFormat(number);
  }
}
