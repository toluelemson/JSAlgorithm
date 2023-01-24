**Challenge: Add Border**

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**

For


    picture = ["abc",
           "ded"]
the output should be

    addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

**Hints**
-   concat()
-   unshift()
-   push()

optimize via: [yoruba.dev](http://www.yoruba.dev)

**Solution: Add Border**

```javascript
export function addBorder(picture: string[]): string[] {
    //initialize a variable with an empty string
    let border: string = "";

    //starts a for loop that iterates i from 0 to 
    // picture[0].length + 2 and i.
    for (let i: number = 0; i < picture[0].length + 2; i++) {
        //adds an asterisk to the border variable 
        // on each iteration of the for loop.
        border += "*";
    }
    //uses the unshift() method to add the border variable 
    // to the beginning of the picture array
    picture.unshift(border);
    //push() method to add the border variable 
    // to the end of the picture array
    picture.push(border);

    //starts another for loop that iterates i
    // from 1 to picture.length - 1 and i is of type number.
    
    for (let i: number = 1; i < picture.length - 1; i++) {
        // adds an asterisk to the beginning and end 
        // of the string at index i in the picture array 
        // on each iteration of the for loop.
        picture[i] = "*" + picture[i] + "*";
    }
    return picture;
}
```
via: [yoruba.dev](http://www.yoruba.dev) 

**Optimized Solution: Add Border**
``` javascript
function addBorder(picture: string[]): string[] {

    let wall = "*".padStart(picture[0].length + 2, "*");
    let picture: string[] = [wall]
    picture [picture.length] = wall
    
    for (let i: number = 1; i < picture.length; i++){
        picture[i] = "*" + picture[i-1] + "*"
    }

    return picture
}
```

This function has a time 
complexity of O(n) where n is the number of element in the picture array since it iterates through the picture array once.




via: [yoruba.dev](http://www.yoruba.dev)

**Input/Output**
- **[time limit] 4000ms (js)**
- **[input] array.string picture**

A non-empty array of non-empty equal-length strings.

*Guaranteed constraints:*

1 ≤ picture.length ≤ 5,

1 ≤ picture[i].length ≤ 5.

- **[output] array.string**

The same matrix of characters, framed with a border of asterisks of width 1.