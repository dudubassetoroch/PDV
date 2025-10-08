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

    
