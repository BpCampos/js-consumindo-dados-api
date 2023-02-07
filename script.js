async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerText = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertido = await consultaCEP.json()
        if (consultaCEPConvertido.erro) {
            throw Error('CEP não existente');
        }
        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')
        const bairro = document.getElementById('bairro')

        cidade.value = consultaCEPConvertido.localidade;
        logradouro.value = consultaCEPConvertido.logradouro;
        estado.value = consultaCEPConvertido.uf;
        bairro.value = consultaCEPConvertido.bairro

        console.log(consultaCEPConvertido);
        return consultaCEPConvertido
    } catch (erro) {
        mensagemErro.innerText = `CEP inválido. Tente novamente.`
    }
}

const cep = document.getElementById('cep')
cep.addEventListener('blur', () => { buscaEndereco(cep.value) })


