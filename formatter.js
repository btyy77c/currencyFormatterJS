function standardFormat(number, separatorMoney, separatorCoin) {
		number = Number(number) || 0;
    separatorMoney = separatorMoney || ',';
    separatorCoin = separatorCoin || '.';
    return number.toFixed(2).
      replace(/(\d)(?=(\d{3})+\.)/g, '$1' + separatorMoney).
      replace(/\.([^\.]*)$/, separatorCoin + '$1');
}
