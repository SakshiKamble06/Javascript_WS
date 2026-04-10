// 1. CallBack Functions

function fetchData(callback){
    setTimeout(()=> {
        const data ={ name : "Wisdom Sprouts" , age : 21};
        callback(data);
    }, 2000);
}
 function displayData(data){
     console.log("Data :" , data);
 }
 fetchData(displayData);

//  Real time Example :Callback after data fetch from DB or API
// Simulate file reading with a callback :
function readFile(callback){
    setTimeout(() =>{
        const fileData ="This is file content." ;
        callback(fileData);

     },1500);
}

readFile((data)=>{
    console.log("File Read :" , data);
});

// Understanding Asyncronous JavaScript 
console.log("Start")
for(let i=0; i<1e9; i++){}
console.log("End")
 