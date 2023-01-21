**Challenge: Add Two Digits**

---
You are given a two-digit integer n. Return the sum of its digits.

**Example**

For n = 29, the output should be
addTwoDigits(n) = 11.

**Hint**
-   split()
-   parseInt()
-   toString()
-   reduce()

via: [yoruba.dev](http://www.yoruba.dev)

**Input/Output**

---

- **[execution time limit] 4 seconds (js)**
- **[input] integer n**

  A positive two-digit integer.

*Guaranteed constraints:*

10 ≤ n ≤ 99.

- **[output] integer**

  The sum of the first and second digits of the input number.

via: [yoruba.dev](http://www.yoruba.dev)



**Solution: Add Two Digits**

---

```javascript
function addTwoDigits(n: number): number {
  let number: string[] = n.toString().split('');
  let sum: number = number.reduce((acc: number, val: string) => {
    return acc + parseInt(val);
  }, 0);
  return sum;
}
```
- toString() method convert n number to string,
- Split("") method convert string to an array of characters,
- ParseInt() convert each element of the array to an integer,
- Reduce() iterate through the array and add each element
to a sum variable.

via: [yoruba.dev](http://www.yoruba.dev)

```csharp
int addTwoDigits(int n) {
    string digits = n.ToString();
    int sum = 0;
    foreach (var val in digits) {
        sum += int.Parse(val.ToString());
    }
    return sum;
}
```