export function areSimilar(a: number[], b: number[]): boolean {

    const aSorted = [...a].sort()
    const bSorted = [...b].sort()

    return aSorted.every((value, index) => value === bSorted[index])

}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
