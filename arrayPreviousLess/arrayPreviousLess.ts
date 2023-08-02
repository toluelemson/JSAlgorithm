export function arrayPreviousLess(items: number[]): number[] {

    const lessThanList: number[] = []

    for(let i=0; i < items.length -1; i++){
        if(items[i] < items[i+1]){
            lessThanList.push(items[i])
        } else {
            lessThanList.push(-1)
        }
    }

    return lessThanList

}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));