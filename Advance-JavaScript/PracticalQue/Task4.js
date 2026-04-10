

let promise=new Promise((resolve,reject)=>{
    resolve("Successfully resolved")
})

promise
.then((data)=>{
    console.log(data)
})

.catch((error)=>{
    console.log("Something went wrong",error)
})



function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Data Fetched")
            resolve({id:1,name:"Anushka"})
        },2000)
    })
}

// getUser()



function getOrders(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
             console.log("Order fetched for users",userId)
             resolve(['order1','order2'])
        }, 2000)
       
    })
}

// getOrders(1)


function sendEmail(orderDetails){
    return new Promise((resolve)=>{
        console.log("Email send for",orderDetails)
        resolve("Email Sent")
    },1000)
}

// sendEmail()


getUser()
.then((user)=>getOrders(user.id))
.then((orders)=>getOrders(orders[0]))
.then((orderDetails)=>sendEmail(orderDetails))
.then((confirmation)=>console.log("Confirmation"))
.catch((error)=>console.log(error))
