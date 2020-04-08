let myAdd = function(x: number, y: number): number { return x + y; };

let myAdd2: (baseValue: number, increment: number) => number =
  function(x, y) { return x + y ;};