const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+':
            return numbers.reduce((a, b) => a + b, 0);
        case '-':
            return numbers.reduce((a, b) => a - b);
        case '*':
            return numbers.reduce((a, b) => a * b, 1);
        case '/':
            return numbers.reduce((a, b) => a / b);
        case '%':
            return numbers.reduce((a, b) => a % b);
        default:
            return "Operator tidak valid!";
    }
};

console.log("Penjumlahan:", calculator('+', 5, 10, 15));  // Output: 30
console.log("Pengurangan:", calculator('-', 20, 5, 3));   // Output: 12
console.log("Perkalian:", calculator('*', 2, 3, 4));      // Output: 24
console.log("Pembagian:", calculator('/', 100, 2, 5));    // Output: 10
console.log("Modulus:", calculator('%', 25, 4));          // Output: 1
