
function printZigZag(n) {

    for (let i = 1; i <= 3; i++) {   
        let row = "";

        for (let j = 1; j <= n; j++) {

            if ((i == 1 && j % 4 == 1) ||
                (i == 2 && j % 2 == 0) ||
                (i == 3 && j % 4 == 3)) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }
}

printZigZag(10);
