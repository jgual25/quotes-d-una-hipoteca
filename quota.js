function calcular(){
    //aqui crida a totes ses funcions
   var quota = Math.round(capital()*interes()/(100*(1-Math.pow(1+interes()/100,-plazos())))*100)/100;
   document.getElementById("response").innerHTML= "La quantitat mensual a abonar surt a: "+quota+" i l'hipoteca s'acabarà de pagar dia "+diavalid();
   return false;
}


function diavalid(){
    var day = new Date(document.getElementById("dia").value);
    if (day.getDate() != 1){
        alert ("La data inicial a pagar ha de ser el dia primer de mes");
        window.location.href = "index.html";

    }else{
    day.setMonth((day.getMonth()+1)+plazos());
    return day.getDate()+"/"+day.getMonth()+"/"+day.getFullYear();
    }
}


function capital(num){
    var num= document.getElementById("capital").value;
    var num = parseInt(num);
    if(num <1000 || num>1000000){
        alert ("El capital ha de ser com a mínim 1.000 i com a màxim 1.000.000.");
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