let dados = [];
$(document).ready(function(){
  $("#submit").click(function(){
    let nome = $("#nome").val();
    let email = $("#email").val();
    let cpf = $("#cpf").val();
    let cnpj = $("#cnpj").val();
    let genero = $("#genero").val();
    let nascimento = $("#nascimento").val();
    let tel = $("#tel").val();
    let cep = $("#cep").val();
    let cidade = $("#cidade").val();
    let estado = $("#estado").val();
    let bairro = $("#bairro").val();
    let logradouro = $("#logradouro").val();
    let numero = $("#numero").val();
    dados.push({nome: nome, email: email, cpf: cpf, cnpj: cnpj, genero: genero, nascimento: nascimento, tel: tel, cep: cep, cidade: cidade, estado: estado, bairro: bairro, logradouro: logradouro, numero: numero});
    $('#tabela').html("");
    $('#table').append("<table class='table' id='dados'>");
    for (let i = 0; i < dados.length; i++) {
     $('#dados').append("</td><td>"+dados[i].nome+"</td><td>"+dados[i].email+"</td><td>"+dados[i].cpf+"</td><td>"+dados[i].cnpj+"</td><td>"+dados[i].genero+"</td><td>"+dados[i].nascimento+"</td><td>"+dados[i].tel+"</td><td>"+dados[i].cep+"</td><td>"+dados[i].cidade+"</td><td>"+dados[i].estado+"</td><td>"+dados[i].bairro+"</td><td>"+dados[i].logradouro+"</td><td>"+dados[i].numero+"</td><td><button class='btn btn-danger' ONCLICK='removeItemOnce("+i+")'>Deletar</button></td></tr>");
    }
    $('#tabela').append("</table>");
  });
});

function removeItemOnce(value) {
  dados.splice(value, 1);
    $('#tabela').append("<table class='table' id='dados'>");
    for (let i = 0; i < dados.length; i++) {
     $('#dados').append("</td><td>"+dados[i].nome+"</td><td>"+dados[i].email+"</td><td>"+dados[i].cpf+"</td><td>"+dados[i].cnpj+"</td><td>"+dados[i].genero+"</td><td>"+dados[i].nascimento+"</td><td>"+dados[i].tel+"</td><td>"+dados[i].cep+"</td><td>"+dados[i].cidade+"</td><td>"+dados[i].estado+"</td><td>"+dados[i].bairro+"</td><td>"+dados[i].logradouro+"</td><td>"+dados[i].numero+"</td><td><button class='btn btn-danger' ONCLICK='removeItemOnce("+i+")'>Deletar</button></td></tr>");
    }
    $('#table').append("</table>");
}


