function extraer(){
    let nombre = document.getElementById('apellidoNombre').value;
    let partes = nombre.split("");

    document.getElementById('apellidoPaterno').value=partes[0];
    document.getElementById('apellidoMaterno').value=partes[1];
    for(let i=0; i<partes.length; i++){
        if(i>= 2){
            document.getElementById("nombres").value += partes[i] + " ";
        }
    }
    document.getElementById('apellidoPaterno').style.color = "black";
    document.getElementById('apellidoMaterno').style.color = "black";
    document.getElementById('nombres').style.color = "black";

}


let flag = 1;
	

function colorear() {
    if (flag) {
        document.getElementById('an').style.background = "red";
        document.getElementById('fn').style.background = "red";
        document.getElementById('ap').style.background = "red";
        document.getElementById('am').style.background = "red";
        document.getElementById('n').style.background = "red";
        document.getElementById('la').style.background = "blue";
        document.getElementById('ed').style.background = "blue";
        document.getElementById('ml').style.background = "blue";
        document.getElementById('cambiarColor').style.background = "blue"
        flag = 0;
    } else {
        document.getElementById('an').style.background = "blue";
        document.getElementById('fn').style.background = "blue";
        document.getElementById('ap').style.background = "blue";
        document.getElementById('am').style.background = "blue";
        document.getElementById('n').style.background = "blue";
        document.getElementById('la').style.background = "red";
        document.getElementById('ed').style.background = "red";
        document.getElementById('ml').style.background = "red";
        document.getElementById('cambiarColor').style.background = "red"
        flag = 1;
    }
}
