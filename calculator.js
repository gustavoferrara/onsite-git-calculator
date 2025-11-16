// Import all our operator functions
import add from './operators/add.js';
import average from './operators/average.js';
import divide from './operators/divide.js';
import isSame from './operators/isSame.js';
import max from './operators/max.js';
import multiply from './operators/multiply.js';
import subtract from './operators/substract.js';
// import min from './operators/min.js';

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the Collaborative Calculator!');
console.log('--------------------------------------');

rl.question('Enter the first number: ', (num1Str) => {
  rl.question('Enter the second number: ', (num2Str) => {
    // Updated prompt with new operator
    rl.question('Enter an operator (+, -, *, /, avg, max, ==): ', (op) => {
      const num1 = parseFloat(num1Str);
      const num2 = parseFloat(num2Str);

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Invalid input. Please enter numbers.');
        rl.close();
        return;
      }

      let result = null;
      // Updated switch statement to handle all operations
      switch (op) {
        case '+':
          result = add(num1, num2);
          break;
        case '-':
          result = subtract(num1, num2);
          break;
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
          result = divide(num1, num2);
          break;
        case 'avg':
          result = average(num1, num2);
          break;
        case 'max':
          result = max(num1, num2);
          break;
        case '==':
          result = isSame(num1, num2);
          break;
        default:
          console.log(`Unknown operator: ${op}`);
          rl.close();
          return;
      }

      if (result === null || result === undefined) {
        console.log(`The '${op}' operation is not implemented yet!`);
      } else {
        // Special formatting for word-based and boolean operators
        if (op === 'avg') {
          console.log(`Result: The average of ${num1} and ${num2} is ${result}`);
        } else if (op === 'max') {
          console.log(`Result: The max of ${num1} and ${num2} is ${result}`);
        } else if (op === '==') {
          console.log(`Result: Are ${num1} and ${num2} the same? ${result}`);
        } else {
          console.log(`Result: ${num1} ${op} ${num2} = ${result}`);
        }
      }

      rl.close();
    });
  });
});
