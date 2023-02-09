const reverseNumber = (num) => {
    let reverse = 0;
    while (num > 0) {
        var digit = num % 10;
        reverse = (reverse * 10) + digit;
        num = parseInt(num / 10);
    }
    console.log(reverse);
}
reverseNumber(12345);
