// Cadatro usuario
function cad(){
    let userCad = document.getElementById('userCad').value;
    let keyCad = document.getElementById('keyCad').value;

    localStorage.setItem('userCad', userCad);
    localStorage.setItem('keyCad', keyCad);

    window.location.href = "index.html";
}

let usersalvo;
let keysalvo;


window.onload = function (){
    usersalvo = localStorage.getItem('userCad');
    keysalvo = localStorage.getItem('keyCad');
    usuarioHome.innerText =  `${usersalvo}`;
    mostrar();
   
}


// LOGIN
function login(){
    let user = document.getElementById('user').value;
    let key = document.getElementById('key').value;

    let usercorreto = usersalvo;
    let keycorreto = keysalvo;

    if(user === usercorreto && key === keycorreto){
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function cadastraprod() {
      let descricao = document.getElementById('descricao').value;
      let valor = document.getElementById('valor').value;
      let saldo = document.getElementById('saldo').value;

      if (!descricao || !valor || !saldo) {
        alert('Preencha todos os campos!');
        return;
      }

      let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
      produtos.push({ descricao, valor, saldo });
      localStorage.setItem('produtos', JSON.stringify(produtos));

      document.getElementById('descricao').value = '';
      document.getElementById('valor').value = '';
      document.getElementById('saldo').value = '';

      mostrar();
    }


 function mostrar() {
      let lista = document.getElementById('lista');
      let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

      lista.innerHTML = '';

      produtos.forEach((p, i) => {
        lista.innerHTML += `
          ${i + 1} - ${p.descricao} | R$${p.valor} | Qtd: ${p.saldo}        
          <br>
        `;
      });
    }

    
function fisica(){
    let btnFisica = document.getElementById('btnFisica');
    let clienteFisico = document.getElementById('clienteFisico');

    btnFisica.onclick = () =>{
        clienteFisico.style.display = "flex"
        clientejuridico.style.display = "none"
    }
    mostracliente();

}

function juridica(){
    let btnJuridica = document.getElementById('btnJuridica');
    let clientejuridico = document.getElementById('clientejuridico')

    btnJuridica.onclick = () => {
        clientejuridico.style.display = "flex"
        clienteFisico.style.display = "none"
    }
    mostracliente();
}

function cadastraFisica(){
    let nomefisico = document.getElementById('nomefisico').value;
    let cpf = document.getElementById('cpf').value;
    let rg = document.getElementById('rg').value
    let nascimento = document.getElementById('nascimento').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let complemento = document.getElementById('complemento').value
    let logradouro = document.getElementById('logradouro').value;
    let numerocasa = document.getElementById('numerocasa').value;
    let bairro = document.getElementById('bairro').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
 
      

    let clientes = JSON.parse(localStorage.getItem('clientes')) || []
    clientes.push({
        nomefisico,cpf,nascimento, cep, cidade, logradouro, numerocasa, bairro,celular,rg,complemento,email, cnpj, ie
    });

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('nomefisico').value = "";
    nomefisico = "";

    document.getElementById('cpf').value = "";
    cpf = "";

    document.getElementById('rg').value = ""
    rg = ""

    document.getElementById('nascimento').value = "";
    nascimento = "";

    document.getElementById('cep').value = "";
    cep = "";

    document.getElementById('cidade').value = "";
    cidade = "";

    document.getElementById('complemento').value = "";
    complemento = "";

    document.getElementById('logradouro').value = "";
    logradouro = "";

    document.getElementById('numerocasa'). value = "";
    numerocasa = "";

    document.getElementById('bairro').value = "";
    bairro = "";

    document.getElementById('celular').value = "";
    celular = "";

    document.getElementById('email').value = ""
    email = ""

    mostracliente();
}

function mostracliente(){
    let listacliente = document.getElementById('listacliente');
    let clientes = JSON.parse(localStorage.getItem('clientes'))||[];

    listacliente.innerHTML = "";

    if(clientes.length > 0){
        listacliente.style.display = "inline-block";
    }
    clientes.forEach((p, i) => {
        listacliente.innerHTML += 
          `
        <div class = "itens-cliente">
            ${i + 1} - ${p.nomefisico} | ${p.cpf} | ${p.rg} | ${p.nascimento} | ${p.cep} | ${p.cidade} 
            | ${p.complemento} | ${p.logradouro} | ${p.numerocasa} | ${p.bairro} | ${p.celular} | ${p.email}     
            <button id = "remover" onclick="removercliente(${i})">Remover</button><div class = "hrq"></div><br>
        </div>`;
      });
}

function removercliente(index) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];      
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    mostracliente();
}

// function cadastraJuridica(){
//     let razao = document.getElementById('razao').value;
//     let fantasia = document.getElementById('fantasia').value;
//     let cnpj = document.getElementById('cnpj').value;
//     let ie = document.getElementById('ie').value;
//     let cepe = document.getElementById('cepe').value;
//     let cidadee = document.getElementById('cidadee').value;
//     let complementoe = document.getElementById('complementoe').value;
//     let logradouroe = document.getElementById('logradouroe').value;
//     let numerocasae = document.getElementById('numerocasae').value;
//     let bairroe = document.getElementById('bairroe').value;
//     let celulare = document.getElementById('celulare').value;
//     let emaile = document.getElementById('emaile').value;

//     let clientes = JSON.parse(localStorage.getItem('clientes')) || []
//     clientes.push({razao, fantasia, cnpj, ie, cepe, cidadee, complementoe, logradouroe, numerocasae, bairroe, celulare, emaile});
    
//     localStorage.setItem('clientes', JSON.stringify(clientes));

//     document.getElementById('razao').value = "";
//     razao = "";
    
//     document.getElementById('fantasia').value = "";
//     fantasia = "";

//     document.getElementById('cnpj').value = "";
//     cnpj = "";

//     document.getElementById('ie').value = "";
//     ie = "";

//     document.getElementById('cepe').value = "";
//     cepe = "";

//     document.getElementById('cidadee').value = "";
//     cidadee = "";

//     document.getElementById('complementoe').value = "";
//     complementoe = "";

//     document.getElementById('numerocasae').value = "";
//     numerocasae = "";

//     document.getElementById('bairroe').value = "";
//     bairroe = "";

//     document.getElementById('celulare').value = "";
//     celulare = "";

//     document.getElementById('emaile').value = "";
//     emaile = "";

//     mostracliente();
// }

// function mostracliente(){
//     let lista = document.getElementById('listacliente');
//     let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

//     if(clientes.length > 0){
//         listacliente.style.display = "inline-block";
//     }

//     lista.innerHTML = ""

//     .forEach((p, i) => {
//          listacliente.innerHTML += 
//           `
//         <div class = "itens-cliente">
//             ${i + 1} - ${p.razao} | ${p.fantasia} | ${p.cnpj} | ${p.ie} | ${p.cepe} | ${p.cidadee} 
//             | ${p.complementoe} | ${p.logradouroe} | ${p.numerocasae} | ${p.bairroe} | ${p.celulare} | ${p.emaile}     
//             <button id = "remover" onclick="removercliente(${i})">Remover</button><div class = "hrq"></div><br>
//         </div>`;
//       });
//     }

//     function removercliente(index) {
//     let clientes = JSON.parse(localStorage.getItem('clientes')) || [];      
//     clientes.splice(index, 1);
//     localStorage.setItem('clientes', JSON.stringify(clientes));
//     mostracliente();
// }

function cadempresa(){
    let compEmp = document.getElementById('compEmp').value
    let bairroEmp = document.getElementById('bairroEmp').value
    let numeroEmp = document.getElementById('numeroEmp').value
    let endEmp = document.getElementById('endEmp').value
    let ufEmp = document.getElementById('ufEmp').value
    let cidadeEmp = document.getElementById('cidadeEmp').value
    let cepEmp = document.getElementById('cepEmp').value
    let ieEmp = document.getElementById('ieEmp').value
    let cnpjEmp = document.getElementById('cnpjEmp').value
    let fantasiaEmp = document.getElementById('fantasiaEmp').value
    let responsavelEmp = document.getElementById('responsavelEmp').value
    let codEmp = document.getElementById('codEmp').value
 
    localStorage.setItem('compEmp', compEmp)

    
}

window.addEventListener('load', function () {
  let compEmpSalvo = localStorage.getItem('compEmp')

    if(compEmpSalvo){
        document.getElementById('compEmpC').innerHTML = compEmpSalvo
    }

});

function apenasteste(){
    let abrir = document.getElementById('testebotao')
    let modalemp = document.getElementById('modalemp')
    let fechar = document.getElementById('fechar')

    abrir.onclick = () => {
        modalemp.style.display = "flex"
    }

    fechar.onclick = () => {
        modalemp.style.display = "none"
    }
}