function RevpyramidPattern(n){

    for(i=1;i<=n;i++){
         let line =' ';
        for(j=1;j<=n-i;j++){
            line+=" ";
        }
            for(k=1;k<=i;k++){
                line+="* ";
            }
             console.log(line)
        }
       
    

    for(i=1;i<=n;i++){
         let line =' ';
        for(j=1;j<=i;j++){
            line+=" ";
        }
            for(k=1;k<=n-i;k++){
                line+="* ";
            }
             console.log(line)
        }
       
    }
RevpyramidPattern(5)