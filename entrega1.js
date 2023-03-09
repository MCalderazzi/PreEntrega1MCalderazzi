function datos(dia, mes, hora) {
    let validar = true;
    if ((dia) || dia < 1 || dia > 31) {
        validar = false;
        alert("El dia es invalido");
    }
    if ((mes) || mes < 1 || mes > 12) {
        validar = false;
        alert("El mes es invalido");
    }
    if ((hora) || hora < 1 || hora > 23) {
        validar = false;
        alert("la hora es invalida");
    }
    return validar;
}
//pedir los datos de la cita
let nombre = prompt("Ingresa tu nombre");
let dia = prompt("Ingrese dia [1 -31]");
let mes = prompt("Ingrese Mes [1-12]");
let hora = prompt("Ingrese hora [9-18]");



let=direccion=0;


    direccion = parseInt(prompt(`
                ingrese 1 si desea la direccion: Av. La Plata 1700
                Ingrese 2 si desea la direccion: Varela 550
                ingrese 3 si desea la direccion: Galicia 2217
                Ingrese 4 si desea la direccion: Espinosa 4565
                Ingrese 5 si desea la direccion: Cabildo 1222`));


if(direccion==1)
    alert(`Su turno es el dia ${dia}/${mes} a las ${hora} en Av. La Plata 1700`)
else if(direccion==2)
    alert(`Su turno es el dia ${dia}/${mes} a las ${hora} en Varela 550`)
else if(direccion==3)
    alert(`Su turno es el dia ${dia}/${mes} a las ${hora} en Galicia 2217`)
else if(direccion==4)
    alert(`Su turno es el dia ${dia}/${mes} a las ${hora} en Espinosa 4565`)
else if(direccion==5)
    alert(`Su turno es el dia ${dia}/${mes} a las ${hora} en Cabildo 1222`)
else{
    alert("su opcion no es valida");
}

//calcular tiempo de esperar/
let tiempoTotal = 0;
let cantidadDeTurnos = 0;

let seguirAgregando = true;
while (seguirAgregando) {
  let tiempoDeEspera = parseInt(prompt("Ingrese el tiempo de espera del paciente en minutos:"));
  tiempoTotal += tiempoDeEspera;
  cantidadDeTurnos++;

  let seguir = prompt("¿Desea agregar otro tiempo de espera? (S/N)");
  if (seguir === "n") {
    seguirAgregando = false;
  }
}

let tiempoPromedio = tiempoTotal / cantidadDeTurnos;
alert(`El tiempo de espera promedio es de ${tiempoPromedio} minutos.`);