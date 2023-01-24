**Challenge 4: AdjacentElementProduct**
---

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

via: [yoruba.dev](http://www.yoruba.dev)

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

An array of integers containing at least two elements.

*Guaranteed constraints:*

2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

- **[output] integer**

The largest product of adjacent elements.

**Solution: AdjacentElementProduct**
---

```javascript
export function adjacentElementsProduct(inputArray: number[]): number {
    let largestNumber = inputArray[0] * inputArray[1]
    for(let i = 1; i < inputArray.length - 1; i++ ){
        let product = inputArray[i] * inputArray[i + 1]
        largestNumber = largestNumber < product ? product : largestNumber
    }
    return largestNumber
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); //23
```
- The first step is to initialize the variable largestNumber
with the product of the first two elements of the inputArray.
- Then using for loop, we iterate through the inputArray starting from
 the second element (index 1) and ending at the second to last element.
- On each iteration, it calculates the product of the current element
 and the next element and compares it with the current maximum product.
- If the current product is larger, it updates the largestNumber variable.
- Finally, the function returns the maxProduct.

via: [yoruba.dev](http://www.yoruba.dev)