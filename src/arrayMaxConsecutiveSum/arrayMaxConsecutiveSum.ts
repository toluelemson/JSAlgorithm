export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0
    let max = 0

    for(let i = 0; i<inputArray.length; i++){
        for(let j = i; j<k; j++){
            sum += inputArray[j]
        }
        if (sum > max){
            max = sum
        }
    }
    return max
}
// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));