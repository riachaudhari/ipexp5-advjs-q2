function createSquareIterator(numbers) {
    let index = 0; // Keep track of the current position in the array

    // Return an object that implements the iterator protocol
    return {
        next() {
            if (index < numbers.length) {
                // Calculate the square of the current number
                const value = numbers[index] ** 2;
                // Move to the next index
                index++;
                // Return the square and mark 'done' as false
                return { value, done: false };
            } else {
                // If all elements are iterated, mark 'done' as true
                return { done: true };
            }
        }
    };
}

// Usage example:
const numbers = [1, 2, 3, 4, 5];
const iterator = createSquareIterator(numbers);

let result = iterator.next();
while (!result.done) {
    console.log(result.value); // Output the square of each number
    result = iterator.next();
}