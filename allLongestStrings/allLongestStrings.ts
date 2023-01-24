export function allLongestStrings(inputArray: string[]): string[] {

        let maxLength = 0;
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i].length > maxLength) {
                maxLength = inputArray[i].length;
            }
        }
        return inputArray.filter(str => str.length === maxLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));