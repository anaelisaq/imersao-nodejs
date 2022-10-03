/*
0 obter um usuario
1 obter numero de teletfone de um usuario pelo id
2 obter o endereço do usuario pelo id
*/

function newUser(){
    setTimeout(function () {
        return {
            id: 1,
            name: "Lucas",
            birthDate: new Date()
        }
    }, 1000)
}

function newPhone(idUser, callback){
    setTimeout(() => {
        return callback(null, {
            phone: "98765442",
            ddd: 11
        })
    }, 2000);
}

function newAddress(idUser, callback){
    setTimeout(() => {
        return callback(null, {
            address: "rua dos bobos",
            number: 2 
        })
    }, 2000);
}

function solveUser(error, user){
    if(error) {
        console.log("error in user", error)
        return;
    }

    getPhone(user.id, function solvePhone(error, phone){
        if(error) {
            console.log("error in phone", error)
            return;
        }

        getAddress(user.id, function solveAddress(error, address){
            if(error) {
                console.log("error in address", error)
                return;
            }

            console.log(`
            Name: ${user.name},
            Address: ${address.address}, ${address.number},
            Phone: (${phone.ddd})${phone.phone}`)
        })
    })
}
