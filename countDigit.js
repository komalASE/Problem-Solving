const countDigit = (num) => {
    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }
    console.log(count);
}
countDigit(12345);