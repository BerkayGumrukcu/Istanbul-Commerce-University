function f(x) {
    return 2 * x;
  }
  
  function g(x) {
    return 5 * x + 6;
  }
  
  let result = f(g(3));
  alert(result);