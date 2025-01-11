function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = addSafe(1, 2); // Correct
const result2 = addSafe(1, '2' as unknown as number); // Type Assertion (Less Safe)
const result3 = addSafe(1, parseInt('2',10)); // Parsing String to Number 
console.log(result1, result2, result3); // Output: 3 3 3 