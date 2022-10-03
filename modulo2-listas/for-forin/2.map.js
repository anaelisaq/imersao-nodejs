const service = require("./service")

//criar o prórpio map
Array.prototype.mapear = function (callback){
    const novoArrayMapeado = []
    for(let i=0; i<=this.length-1; i++){
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}
async function main(){
    try {
        const results = await service.obterPessoas("a")
        // const names = []
        // results.results.forEach(element => {
        //     names.push(element.name)
        // })
        // console.log("names", names)

        // const names = results.results.map(pessoa => pessoa.name)
        // console.log("names", names)

        const names = results.results.mapear(function (pessoa, i){
            return `${i} ${pessoa.name}`
        })
        console.log("names", names)
    } catch (error) {
        console.error("erro:", error)
    }
}

main()