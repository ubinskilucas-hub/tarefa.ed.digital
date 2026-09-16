const botoesCurtir = document.queryselectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
Function curtir(){
    const contador =botaoCurtir.queryselector("span");
    if(curtiu === false){
        contador.textContent++;
        curtiu = true;}
        else{
            contador.textContent--;
            curtiu = false;
        }
}
});
