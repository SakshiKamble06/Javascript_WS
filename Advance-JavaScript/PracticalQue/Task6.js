async function getUser() {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user=await response.json();
        console.log("User : ",user);
    }catch(err){
        console.log("Failed to fetch user : ",err);
    }
}

getUser();