const someThingWillHappen = () => {
    return new Promise ((resolve,reject) => {
        if(true){
            resolve("hey")
        }
        else{
            reject("mala")
        }
    });
};

someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))


const someThingWillHappen2 = () => {
    return new Promise((resolve,reject)=> {
    if (true) {
        setTimeout(() => {
            resolve("True")
        }, 2000)
    }else{
        const error = new Error( "NOOOOOOOOOOOO!");
        reject(error)
    }
});
}


someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([someThingWillHappen(),someThingWillHappen2()])
    .then(response => {
        console.log("array of results",response)
    })
    .catch(err =>{
        console.error(err)
    })

