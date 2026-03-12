
function printPascalsTriangle(n){

    for(let i = 0; i < n; i++){

        let line = "";
        let value = 1;

        for(j=1;j<=n-i;j++){
             line+=" ";
         }

        for(let k = 0; k <= i; k++){

            line += value + " ";

            value = value * (i - k) / (k + 1);
        }

        console.log(line);
    }
}

printPascalsTriangle(5);
