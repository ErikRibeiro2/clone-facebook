function verifica(){
    const email = document.querySelector("#input-email");
    const senha = document.querySelector("#input-senha");

    if(email.value == "erik@gmail.com" && senha.value == "erikribeiro"){
        alert("Acesso LIBERADO!");
    }
    else {
        alert("Email ou senha incorretos");
    }
}