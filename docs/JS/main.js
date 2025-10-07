function cad(){
    let userCad = document.getElementById('userCad').value
    let keyCad = document.getElementById('keyCad').value

    localStorage.setItem('userCad', userCad)
    localStorage.setItem('keyCad', keyCad)

    window.location.href = "index.html"
}

let usersalvo
let keysalvo


window.onload = function (){
    usersalvo = localStorage.getItem('userCad')
    keysalvo = localStorage.getItem('keyCad')
    usuarioHome.innerText =  `${usersalvo}`
}

function login(){
    let user = document.getElementById('user').value
    let key = document.getElementById('key').value

    let usercorreto = usersalvo
    let keycorreto = keysalvo

    if(user === usercorreto && key === keycorreto){
        window.location.href = "home.html"
    } else {
        alert("Usuário ou senha incorretos!")
    }
}




