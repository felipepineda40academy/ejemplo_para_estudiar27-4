alert ('Hey estoy funcionando')


//Con undefined!!!

var papayas = 4;
var sandias = 2;
var operacion_calculadora = 'division'; //suma, resta, multiplicacion, division

function calculadora_frutas (fruta_1,fruta_2,que_operacion_quiero_hacer){

    var respuesta_suma;
    var respuesta_resta;
    var respuesta_multiplicacion;
    var respuesta_division;

    if (que_operacion_quiero_hacer == 'suma'){
        respuesta_suma = fruta_1 + fruta_2;
    }
    if (que_operacion_quiero_hacer == 'resta'){
        respuesta_resta = Math.abs(fruta_1 - fruta_2);  //saca el valor absoluto de una resta siempre
    }
    if (que_operacion_quiero_hacer == 'multiplicacion'){
        respuesta_multiplicacion = fruta_1 * fruta_2;
    }
    if (que_operacion_quiero_hacer == 'division'){
        respuesta_division = fruta_1/fruta_2;
    }

    console.log ('La suma es: '+respuesta_suma+' la resta es: '+respuesta_resta+' la multiplicacion es:'+respuesta_multiplicacion+' la division es '+respuesta_division)

}

calculadora_frutas (papayas,sandias,operacion_calculadora)


//Dando todos los numeros

/*
var papayas = 4;
var sandias = 2;
var operacion_calculadora = 'division'; //suma, resta, multiplicacion, division

function calculadora_frutas (fruta_1,fruta_2,que_operacion_quiero_hacer){

    var respuesta_suma;
    var respuesta_resta;
    var respuesta_multiplicacion;
    var respuesta_division;

    
    respuesta_suma = fruta_1 + fruta_2;


    respuesta_resta = Math.abs(fruta_1 - fruta_2);  //saca el valor absoluto de una resta siempre


    respuesta_multiplicacion = fruta_1 * fruta_2;


    respuesta_division = fruta_1/fruta_2;
    

    console.log ('La suma es: '+respuesta_suma+' la resta es: '+respuesta_resta+' la multiplicacion es:'+respuesta_multiplicacion+' la division es '+respuesta_division)

}

calculadora_frutas (papayas,sandias,operacion_calculadora)
*/