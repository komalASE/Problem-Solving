const fibonacci = (n) => {
  if(n <= 1) {
    return n;
  }

  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  console.log(result[result.length - 1]);
}
fibonacci(10)