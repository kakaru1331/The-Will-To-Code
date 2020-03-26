enum Color {
  Red = 1,
  Green = 5,
  Blue = 10
}

const color: Color = Color.Green;
const colorDerivedWithIndex = Color[10];

console.log(color);
console.log(colorDerivedWithIndex);
