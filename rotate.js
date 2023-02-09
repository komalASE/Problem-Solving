function numberOfDigit(n) {
    let digit = 0
    while (n > 0) {
        digit++;
        n = Math.floor(n / 10);
    }
    return digit;
}

function rotateNumberByK(n, k) {
    let x = numberOfDigit(n);

    k = (k % x)

    if (k < 0) k += x

    let terms = 10**k
    left = Math.floor(n / terms)
    right = Math.floor(n % terms)

    result = (right* (10**(x-k))) + (left)
    console.log(result);
}

rotateNumberByK(12345, -1);