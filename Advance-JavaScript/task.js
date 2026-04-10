function sayLouder(){
    
}



function getPositiveNumber(numbers){

  return numbers.filter(x =>x>0)
}
console.log( getPositiveNumber([10, -2,4]))

function getPassingTests(result){
     return result.filter((x,index) => x >10)
}

console.log(getPassingTests(data))