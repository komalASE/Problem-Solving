/*

* * * * * 
* * * * 
* * *  
* * 
* 

*/ 

const pattern = (n) => {
    let string = ""
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            string += "*"
        }
        string +="\n"
    }
    return string;
}
console.log(pattern(5));