export function addTwoDigits(n: number): number {
    let digits: string[] = n.toString().split('');
    let sum: number = digits.reduce((acc: number, val: string) => {
        return acc + parseInt(val);
    }, 0);
    return sum;
}

console.log(addTwoDigits(29));