
function printRevTriangle(n){
    for(i=1;i<=n;i++){
         line =' ';
        for(j=1;j<=n-i+1;j++){
            line+="* "
        }
        console.log(line)
    }
}

printRevTriangle(5)
