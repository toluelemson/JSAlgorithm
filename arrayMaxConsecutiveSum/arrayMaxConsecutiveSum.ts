export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    let max = 0

    for(let i =0; i<k; i++){
        let sum = inputArray[i] + inputArray[i + 1]
        if (sum > max ) {
            max = sum
        }
    }

    return max

}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));