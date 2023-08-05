export function sortByHeight(a: number[]): number[] {

   let array2 = a.filter((value) => {
       if(value !== -1){
           return value
       }
   }).sort((a, b) => a - b )

    let trackIndex = 0

    for(let i =0; i < a.length; i++){
        if(a[i] !== -1){
            a[i] = array2[trackIndex]
            trackIndex++
        }
    }
    return a
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));