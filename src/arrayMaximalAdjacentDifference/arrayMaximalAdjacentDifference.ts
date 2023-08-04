export function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let absoluteDiff = Math.abs(inputArray[0]) - Math.abs(inputArray[1])
    let max = absoluteDiff
    for(let i=1; i < inputArray.length; i++){
        absoluteDiff = inputArray[i] - inputArray[i+1]
        if (absoluteDiff > max){
            max = absoluteDiff
        }
    }

    return max

}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));