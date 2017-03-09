var currencyFile = require('./currencies')

function standardFormat(number, thousandsSeparator, decimalSeparator, decimalDigits) {
    // Set default values
		number = Number(number) || 0;
    thousandsSeparator = thousandsSeparator || ',';
    decimalSeparator = decimalSeparator|| '.';
    decimalDigits = decimalDigits || 2

    // Set decimalDigits
    return number.toFixed(decimalDigits).
      // set thousandsSeparator
      replace(/(\d)(?=(\d{3})+\.)/g, '$1' + thousandsSeparator).
      // set decimalSeparator
      replace(/\.([^\.]*)$/, decimalSeparator+ '$1');
}

function noDecimals(number, thousandsSeparator) {
    // Set default values
		number = Number(number) || 0;
    thousandsSeparator = thousandsSeparator || ',';

    // Set decimalDigits
    return number.toFixed(0).
      // set thousandsSeparator
      replace(/(\d)(?=(\d{3})+\.)/g, '$1' + thousandsSeparator);
}

function INRCurrency(number) {
	ints = (Number(number) || 0).toFixed(2).slice(0, -3);
  floats = (Number(number) || 0).toFixed(2).slice(-3);
  return ints.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + floats;
}

function setCurrency(number, currencyCode) {
	if (currencyFile.currencies[currencyCode]) {
  	return currencyFile.currencies[currencyCode].formatCurrency(number);
  } else {
  	return standardFormat(number);
  }
}
