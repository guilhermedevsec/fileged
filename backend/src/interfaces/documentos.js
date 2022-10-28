const documentos = require('../models/documentos')

const inserirDados = async (valor) => {
    switch (valor.tipo) {
        case 1:
            try{
                 documentos.create({
                    tipo : valor.tipo,
                    documento : valor.documento,
                    descricao : valor.descricao
                 })
            }catch(erro){
                console.log("erro ao inserir" + erro)
            }
            break;

        case 2:
            console.log("contratos")
            break;
    }
}

const recuperarDados = async () =>{
    let valor = documentos.findAll()
    return valor;

}



module.exports = {
    inseriDados : inserirDados,
    recuperarDados : recuperarDados,
}   