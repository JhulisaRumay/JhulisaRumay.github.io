//FUNCIÓN PARA COLOREAR

let flag=1;

function colorear(){
    if(flag){
        document.getElementById('apeNom').style.background= "red";
        document.getElementById('fecNac').style.background= "red";
        document.getElementById('apePat').style.background= "red";
        document.getElementById('apeMat').style.background= "red";
        document.getElementById('nomb').style.background= "red";
        document.getElementById('longApe').style.background= "blue";
        document.getElementById('ed').style.background= "blue";
        document.getElementById('mesLet').style.background= "blue";
        document.getElementById('cambiarColor').style.background= "blue";
       
        flag=0;
    }else{
        document.getElementById('apeNom').style.background= "blue";
        document.getElementById('fecNac').style.background= "blue";
        document.getElementById('apePat').style.background= "blue";
        document.getElementById('apeMat').style.background= "blue";
        document.getElementById('nomb').style.background= "blue";
        document.getElementById('longApe').style.background= "red";
        document.getElementById('ed').style.background= "red";
        document.getElementById('mesLet').style.background= "red";
        document.getElementById('cambiarColor').style.background= "red";
       
        flag=1;
    }
}
//FUNCIÓN EXTRAER

function extraer(){
    let nombre = document.getElementById('apellidoNombre');
    let partes = nombre.split(" ");

    document.getElementById('apellidoPaterno')=partes[0];
    document.getElementById('apellidoMaterno')=partes[1];
   for(let i=0; i<partes.length; i++){
     if(i>= 2){
      document.getElementById("nombres") += partes[i] + " ";
     }
   }
    document.getElementById('apellidoPaterno').style.color = "black";
    document.getElementById('apellidoMaterno').style.color = "black";
  document.getElementById('nombres').style.color = "black";

}
