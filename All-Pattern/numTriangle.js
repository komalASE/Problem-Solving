/*

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

*/

const pattern = (n) => {
    let string = ""
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            string += j;
        }
        string +="\n"
    }
    return string;
}
console.log(pattern(5));