/* 

1 2 3 4 5 
1 2 3 4  
1 2 3 
1 2 
1 

*/


const pattern = (n) => {
    let string = ""
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        string +="\n"
    }
    return string;
}
console.log(pattern(5));