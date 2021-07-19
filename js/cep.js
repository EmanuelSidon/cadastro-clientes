const $campoCep = document.querySelector("#cep");
const $campoCidade = document.querySelector("#cidade");
const $campoEstado = document.querySelector("#estado");
const $campoBairro = document.querySelector("#bairro");
const $campoLogradouro = document.querySelector("#logradouro");

$campoCep.addEventListener("blur", infosDoEvento => {
        const cep = infosDoEvento.target.value;
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
        .then(respostaDoServer  => {
            return respostaDoServer.json();
        })
        .then(dadosDoCep => {
            console.log(dadosDoCep);
            $campoCidade.value = dadosDoCep.localidade;
            $campoEstado.value = dadosDoCep.uf;
            $campoBairro.value = dadosDoCep.bairro;
            $campoLogradouro.value = dadosDoCep.logradouro;
        });
});
