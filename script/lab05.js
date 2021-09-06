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
    let nombre = document.getElementById('apellidoNombre').value;
    let partes = nombre.split(" ");

    document.getElementById('apellidoPaterno').value=partes[0];
    document.getElementById('apellidoMaterno').value=partes[1];
   for(let i=0; i<partes.length; i++){
     if(i>= 2){
      document.getElementById("nombres").value += partes[i] + " ";
     }
   }
   
  document.getElementById("longitudApellido").value = partes[0].length + partes[1].length;


  var fecha = new Date();
  fecha = document.getElementById('fechaNacimiento').value;
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var mes_name = fecha.split("-");
  var mes = parseInt(mes_name[1] - 1);
  document.getElementById("mesLetras").value = meses[mes];
  document.getElementById("edad").value = "".concat(calcularEdad(fecha), " a\xF1os");


  document.getElementById('apellidoPaterno').style.color = "black";
  document.getElementById('apellidoMaterno').style.color = "black";
  document.getElementById('nombres').style.color = "black";
  document.getElementById('longitudApellido').style.color = "black";
  document.getElementById('mesLetras').style.color = "black";
  document.getElementById('edad').style.color = "black";
  
}


calcularEdad = function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
      edad--;
  }
  return edad;
}



