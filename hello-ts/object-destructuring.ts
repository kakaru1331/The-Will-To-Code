const obj = {
  a: 'apple',
  b: 'banana',
  c: 'cherry'
}

const { a: fruitStartsWithA, b: fruitStartsWithB }: { a: string, b: string } = obj

console.log(fruitStartsWithA);
console.log(fruitStartsWithB);