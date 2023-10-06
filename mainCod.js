const form = document.getElementById ('form-list');
const nome = [];
const telefone= [];

let linhas =''

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha () {
    const inputNome = document.getElementById ('nome-agenda');
    const inputTelefone = document.getElementById ('telefone-agenda');

    if(nome.includes(inputNome.value)) {
        alert('O Nome ' +  inputNome.value  +  ' já existe');
    } else {  
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += ` <td>${inputNome.value}</td>`;
        linha += ` <td>${inputTelefone.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';

}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
