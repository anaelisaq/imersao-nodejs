//criação do design de pattern: strategy | desenvolvendo a estratégia toda junta para depois dar responsabilidade única

class NotImplementedException extends Error{
    constructor(){
        super("not implemented exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedException()
    }

    read(query){
        throw new NotImplementedException()
    }

    update(id, item){
        throw new NotImplementedException()
    }

    delete(id){
        throw new NotImplementedException()
    }

    isConnected(){
        throw new NotImplementedException()
    }
}

class MongoDB extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log("item salvo")
    }
}

class Postgres extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log("item salvo postgres")
    }
}

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super();
        this._databse = strategy;
    }

    create(item) {
        return this._databse.create(item);
    }

    read(query) {
        return this._databse.read(query);
    }

    update(id, item) {
        return this._databse.update(id, item);
    }

    delete(id) {
        return this._databse.delete(id);
    }

    isConnected() {
        return this._databse.isConnected();
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()
contextMongo.read()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()