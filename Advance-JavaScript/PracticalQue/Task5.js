
let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Data Fetched Succesfully")
    }else{
        reject("Error")
    }

})

promise
.then((result)=>{
    console.log("Success",result)
})

.catch((error)=>{
    console.log("Error",error)
})



let pizzaPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isAvailable=true;
        if(isAvailable){
            resolve("Pizza delivered")
        }else{
            reject("Pizza shop clodes")
        }
    },2000)
})

pizzaPromise
.then((message)=>{
    console.log("Yay..!",message)
})

.catch((error)=>{
    console.log("Opps",error)
})



function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={name:"Wisdom Sprouts",city:"pune"}
        resolve(data)
    },1000)
        });
        
}

fetchData()
.then(data=>{
    console.log("Data Received",data)
})

.catch(error=>{
    console.log("Error",error)
})
