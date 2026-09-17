    

    

function logar() {
    
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value


    if ( senha == "" ||  email == "" || nome =="") {
        alert("Senha invalida")
    } else{
    window.location.href = "feed/index.html";
}   
}
