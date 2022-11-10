//utilização das estratégias

const ICrud = require("./../interfaces/interfaceCrud")

class ContextStrategy extends ICrud {
    constructor(strategy){
        super()
        this._databse = strategy
    }

    create(item) {
        return this._databse.create(item)
    }

    read(query){
        return this._databse.read(query)
    }

    update(id, item){
        return this._databse.update(id, item)
    }

    delete(id){
        return this._databse.delete(id)
    }

    isConnected(){
        return this._databse.isConnected()
    }
}

module.exports = ContextStrategy