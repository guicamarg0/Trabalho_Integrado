function abrirMenu(){
    let barraMenuAberto = document.getElementById('barraMenu');

    if(barraMenuAberto.style.width == "180px"){
        barraMenuAberto.style.width = "0px";
    }else{
        barraMenuAberto.style.width = "180px";
    }
}
const btn = document.querySelector('#idbtn')
const header = document.querySelector('h1')

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const nome = document.querySelector('#idNome').value
    const data = document.querySelector('#idData').value
    const cpf = document.querySelector('#idCpf').value
    const rg = document.querySelector('#idRG').value
    const endereco = document.querySelector('#idEndereco').value
    const tel = document.querySelector('#idTel').value
    const email = document.querySelector('#idEmail').value
    const sexo = document.querySelector('#idRenda').value
    


    console.table([nome,data,cpf,rg,endereco,tel,email,sexo,etnia,saude,escolar,rne])

    
})

