import getData from "./my-module.js";

async function userData (user){
    try {
        const dataUser = await getData(user)
        console.log(dataUser)
    } catch (error) {
        
    }
}
userData(1)