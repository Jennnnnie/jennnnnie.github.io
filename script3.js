function fib(n) {
  if (n < 2) {
    return n;
  }
  // fib(n) = fib(n-1) + fib(n-2)
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(9));
