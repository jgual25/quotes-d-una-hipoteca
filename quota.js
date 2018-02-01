function calcular(){
    //funció que crida a totes les funcions
   var quota = Math.round(capital()*interes()/(100*(1-Math.pow(1+interes()/100,-plazos())))*100)/100;
   document.getElementById("response").innerHTML= "La quantitat mensual a abonar surt a: "+quota+" i l'hipoteca s'acabarà de pagar dia "+diavalid();
   return false;
   document.body.innerHTML = "";//en cas de que no la data introduida no sigui dia 1 es reinicialitzarà la pàgina en blanc
}


function diavalid(){//funcio que mira si la data introduida és el primer de mes. en cas de no ser es torna a carregar la pàgina
    var day = new Date(document.getElementById("dia").value);
    if (day.getDate() != 1){
        alert ("La data inicial a pagar ha de ser el dia primer de mes");
        window.location.href = "index.html";

    }else{
    day.setMonth(day.getMonth()+1+plazos());//per al dia 1 de cada mes es retorna la data que s'acabarà de pagar en forma d'string
    diafi = day.getDate()+"/"+day.getMonth()+"/"+day.getFullYear();
    return diafi;
    }
}


function capital(num){//funcio que contempla el capital introduit
    var num= document.getElementById("capital").value;
    var num = parseInt(num);
    if(num <1000 || num>1000000){
        alert ("El capital ha de ser com a mínim 1.000 i com a màxim 1.000.000.");
    }else{
        return num;
    }
    
}
function interes(){//funció que contempla el tipus d'interès
    var tipo= document.getElementById("interes").value;
    var resultat=((tipo*10/100)/12);
    return resultat;
}
function plazos(){//funcio que transforma els anys introduits en mesos
    var mesos = document.getElementById("plaços").value;
    var resultat= mesos*12;
    return resultat;
}