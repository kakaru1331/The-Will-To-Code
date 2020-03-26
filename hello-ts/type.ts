type funcSignature = { a: string, b?: number }

function test({a, b}: funcSignature): void {
  console.log(a, b);  
}

test({a: 'a', b: null});
