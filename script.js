function abrirMenu(){
    let barraMenuAberto = document.getElementById('barraMenu');

    if(barraMenuAberto.style.width == "180px"){
        barraMenuAberto.style.width = "0px";
    }else{
        barraMenuAberto.style.width = "180px";
    }
}