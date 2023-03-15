export default function maioridade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade')
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const DataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    
    return dataAtual >= DataMais18;
}