function calcular(){
    //aqui crida a totes ses funcions
}

function diavalid(){
    var day = document.getElementById("dia").value;
}

function capital(){
    var num= document.getElementById("capital").value;
}
function interes(){
    var tipo= document.getElementById("interes").value;
    var resultat=((tipo*10)/100)/12;
    return resultat;
}
function plazos(){
    var mesos = document.getElementById("plaços").value;
    var resultat= mesos*12;
    return resultat;
}