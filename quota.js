function calcular(){
    //aqui crida a totes ses funcions
   var quota = Math.round(capital()*interes()/(100*(1-Math.pow(1+interes()/100,-plazos())))*100)/100;
   document.getElementById("response").innerHTML= "La quantitat mensual a abonar surt a: "+quota+" i l'hipoteca s'acabarà de pagar dia";
   return false;
}


function diavalid(){
    var day = new Date(document.getElementById("dia").value);
    alert(day.getDate());
    day = day.getDate();
    if(day == 1){
        return day; 
    }else{
        return null;
        alert ("El dia inicial ha de començar a dia primer de mes.");
       }
}

/*function calcularDiasAusencia(fechaIni, fechaFin) {
    var diaEnMils = 1000 * 60 * 60 * 24,
        desde = new Date(fechaIni.substr(0, 10)),
        hasta = new Date(fechaFin.substr(0, 10)),
        diff = hasta.getTime() - desde.getTime() + diaEnMils;// +1 incluir el dia de ini
    return diff / diaEnMils;
  }
  
  document.getElementById('calcular').addEventListener('click', function() {
    document.getElementById('dias').innerText = calcularDiasAusencia(
      document.getElementById('fechaIni').value,
      document.getElementById('fechaFin').value
    );
});*/

function capital(num){
    var num= document.getElementById("capital").value;
    var num = parseInt(num);
    if(num <1000 || num>1000000){
        alert ("El capital ha de ser com a mínim 1.000 i com a màxim 1.000.000.")
    }else{
        return num;
    }
    
}
function interes(){
    var tipo= document.getElementById("interes").value;
    var resultat=((tipo*10/100)/12);
    return resultat;
}
function plazos(){
    var mesos = document.getElementById("plaços").value;
    var resultat= mesos*12;
    return resultat;
}