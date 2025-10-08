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
    mostrar()
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


}

function juridica(){
    let btnJuridica = document.getElementById('btnJuridica');
    let clientejuridico = document.getElementById('clientejuridico')

    btnJuridica.onclick = () => {
        clientejuridico.style.display = "flex"
        clienteFisico.style.display = "none"
    }
}

function cadastraFisica(){
    let nomefisico = document.getElementById('nomefisico').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('nascimento').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let logradouro = document.getElementById('logradouro').value;
    let numeroCasa = document.getElementById('numeroCasa').value;
    let bairro = document.getElementById('bairro').value;
    let celular = document.getElementById('celular').value;

    if(!nomefisico || !cpf || !nascimento || !cep || !cidade ||logradouro || !numeroCasa || !bairro || !celular){
        alert('Preencha todos os campos')
    }

    let clientes = JSON.parse(localStorage.getItem(clientes)) || []
    clientes.push({
        nomefisico,cpf,nascimento, cep, cidade, logradouro, numeroCasa, bairro,celular
    });

    localStorage.setItem('clientes', JSON.stringify(clientes))

    document.getElementById('nomefisico').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('nascimento').value = ''
    document.getElementById('cep').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('logradouro').value = ''
    document.getElementById('numeroCasa').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('celular').value = ''
}