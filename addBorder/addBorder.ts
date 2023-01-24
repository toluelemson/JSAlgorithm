export function addBorder(picture: string[]): string[] {
    let border: string = "";
    for (let i: number = 0; i < picture[0].length + 2; i++) {
        border += "*";
    }
    picture.unshift(border);
    picture.push(border);
    for (let i: number = 1; i < picture.length - 1; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    return picture;

}

//Optimized

function addBorder2(picture: string[]): string[] {

    let wall = "*".padStart(picture[0].length + 2, "*");
    let border: string[] = [wall]
    border[picture.length] = wall
    for (let i: number = 1; i < picture.length; i++){
        border[i] = "*" + picture[i-1] + "*"
    }
    return border
}
console.log(addBorder2(["abc", "ded"])); //
// picture = ["abc",
//     "ded"]

// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
// "*****"]

console.log(addBorder(["abc", "ded"]));
console.log(addBorder2(["abc", "ded"]));