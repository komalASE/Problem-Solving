let min = 4;
let max = 13;
for (i = min; i < max; i++) {
    let x = 1;
    if (i == 0 || i == 1) x = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            x = 0;
            break;
        }
    }
    if (x == 1) {
        // if prime then print the numbers 
        console.log(i);
    } else {
        // if not prime print the number do nothing 
    }
}