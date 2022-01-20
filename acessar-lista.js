
const cliente = {
    nome:"Luiz Gustavo",
    Idade:36,
    cpf:"123456789-12",
    email:"gustavol2010@yahoo.com"
}

const chaves = ["nome","idade","cpf","email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))


