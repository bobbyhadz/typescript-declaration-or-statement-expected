export {};

// Declaration or statement expected error

// EXAMPLE 1 - Solve the error when destructuring

let one: number;

const obj = {
  one: 1,
};

// ✅ OK
({ one } = obj); // 👈️ this must be wrapped in parentheses

console.log(one); // 👉️ 1

// ---------------------------------------------------

// // EXAMPLE 2 - Solve the error when exporting

// const sum = (a: number, b: number) => a + b;

// // ✅ OK
// export { sum };

// ---------------------------------------------------

// // EXAMPLE 3 - Export and declaration in a single statement

// // ✅ OK
// export const sum = (a: number, b: number) => a + b;
