/*

       * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * *

*/

const pattern = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {

        // for spaces printing
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }

        // for star printing
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
pattern(6);
