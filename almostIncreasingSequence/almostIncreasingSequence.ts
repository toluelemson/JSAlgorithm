export function almostIncreasingSequence(sequence: number[]): boolean {

        let removeCount = 0;
        for (let i = 0; i < sequence.length - 1; i++) {
            if (sequence[i] >= sequence[i + 1]) {
                removeCount++;
                if (removeCount > 1) {
                    return false;
                }
                if (sequence[i] >= sequence[i + 2] && sequence[i - 1] >= sequence[i + 1]) {
                    return false;
                }
            }
        }
        return true;
}

console.log(almostIncreasingSequence([3, 2, 1, 7, 16]))
console.log(almostIncreasingSequence([1, 3, 2]))