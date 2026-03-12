function printSquare(n){
    for(i=1;i<=n;i++){
        line = ''
        for(j=1; j<=n;j++){
            line+='* '
        }
        console.log(line)
    }
}
printSquare(5)