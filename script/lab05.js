function extraer(){
    let nombre = document.getElementById('apellidoNombre').ariaValueMax;
    let partes = nombre.split("");

    document.getElementById('apellidoPaterno').ariaValueMax=partes[0];
    document.getElementById('apellidoMaterno').ariaValueMax=partes[1];
    for(let i=0; i<partes.length; i++){
        if(i>= 2){
            document.getElementById("nombres").ariaValueMax += partes[i] + " ";
        }
    }
    document.getElementById('apellidoPaterno').style.color = "black";
    document.getElementById('apellidoMaterno').style.color = "black";
    document.getElementById('nombres').style.color = "black";

}
