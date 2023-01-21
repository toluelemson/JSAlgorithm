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

// picture = ["abc",
//     "ded"]

// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
// "*****"]

console.log(addBorder(["abc", "ded"]));