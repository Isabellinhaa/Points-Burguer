const form = document.getElementById('formula')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs()
})

function checkInputs(){
    const nomeValue = nome.value
    const emailValue = email.value
    const telefoneValue = telefone.value

    if(nomeValue === ""){
        setErrorFor(nome, "O nome é obrigatório.")
    } else{
        setSuccessFor(nome)
    }

    if( emailValue === ""){
        setErrorFor(email, "O email é obrigatório.")
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido")
    } else {
        setSuccessFor(email)
    }

    if(telefoneValue === ""){
        setErrorFor(telefone, "Telefone é obrigatório.")
    } 
    else {
        setSuccessFor(telefone)
    }

    const formControls = form.querySelectorAll(".pergunta")

    const formIsValid = [...formControls].every((formControl) => {
        return ( formControl.className === "pergunta success")
    })

    if (formIsValid){
        console.log("Cadastro realizado com sucesso")
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "pergunta error"
}

function setSuccessFor(){
    window.location.reload(true);
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
}