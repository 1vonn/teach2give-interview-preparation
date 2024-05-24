// Function to print FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // Check and verify whether the number is both divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Verify if the number is divisible by 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Check if the number is divisible by 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Otherwise, just print the number
        else {
            console.log(i);
        }
    }
}

// Call the function to print FizzBuzz
fizzBuzz();
