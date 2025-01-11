# TypeScript Type Error: Adding Number and String

This repository demonstrates a common TypeScript error: attempting to add a number and a string. The error occurs because TypeScript's type system enforces type safety, preventing incompatible operations.

## Bug
The `add` function is declared to accept two numbers and return a number.  However, the code calls the function with a number (1) and a string ('2'), which causes a type error.

## Solution
The solution involves either type checking to ensure both arguments are numbers or using a type assertion to tell TypeScript to treat the string as a number (although this is generally less safe).

## How to reproduce
1. Clone the repository.
2. Compile the code using the TypeScript compiler: `tsc bug.ts`
3. Run the code (the error will be visible in the compiler output).