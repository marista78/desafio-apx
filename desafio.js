///ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//------------------------------------------------ -----------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto
// de la lógica funciona bien)

const  jugadorUno  =  {
    nombre : "Marce" ,
    habilidades : {
      ataque : 70 ,
      velocidad : 30 ,
      vida : 60 ,
      magia : 120 ,
    } ,
    artículos : [ "espada" ,  "escudo" ,  "varita" ] ,
  } ;
  
  const  jugadorDos  =  {
    nombre : "Flor" ,
    habilidades : {
      ataque : 73 ,
      velocidad : 30 ,
      vida : 80 ,
      magia : 100 ,
    } ,
    articulos : [ "escudo" ,  "varita" ,  "capa" ,  "pocion" ] ,
  } ;
  
  //------------------------------------------------ -----------------------//
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  let  contadorPuntosJug1  =  0 ;
  let  contadorPuntosJug2  =  0 ;
  
  //Ganador:
  let  ganador ;
  
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE

  if  ( jugadorUno.habilidades.ataque  >  jugadorDos.habilidades.ataque )  {
    contadorPuntosJug1 ++;
  }  else  if  ( jugadorUno.habilidades.ataque  <  jugadorDos.habilidades.ataque )  {
    contadorPuntosJug2 ++ ;
  }  else  {
    contadorPuntosJug1 ++ ;
    contadorPuntosJug2 ++ ;
  }
  
  //COMPARACIÓN POR VELOCIDAD:

  if  ( jugadorUno.habilidades.velocidad  >  jugadorDos.habilidades.velocidad )  {
    contadorPuntosJug1 ++;
  }  else  if  ( jugadorUno.habilidades.velocidad  <  jugadorDos.habilidades.velocidad )  {
    contadorPuntosJug2 ++ ;
  }  else  {
    contadorPuntosJug1 ++ ;
    contadorPuntosJug2 ++ ;
  }
  
  //COMPARACIÓN POR NIVEL DE VIDA:

  if  ( jugadorUno.habilidades.vida  >  jugadorDos.habilidades.vida )  {
    contadorPuntosJug1 ++;
  }  else  if  ( jugadorUno.habilidades.vida  <  jugadorDos.habilidades.vida )  {
    contadorPuntosJug2 ++ ;
  }  else  {
    contadorPuntosJug1 ++ ;
    contadorPuntosJug2 ++ ;
  }
  
  //COMPARACIÓN POR MAGIA:

  if  ( jugadorUno.habilidades.magia  >  jugadorDos.habilidades.magia )  {
    contadorPuntosJug1 ++;
  }  else  if  ( jugadorUno.habilidades.magia  <  jugadorDos.habilidades.magia )  {
    contadorPuntosJug2 ++ ;
  }  else  {
    contadorPuntosJug1 ++ ;
    contadorPuntosJug2 ++ ;
  }
  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS

  if  ( jugadorUno.artículos.length  >  jugadorDos.articulos.length )  {
    contadorPuntosJug1 ++;
  }  else  if  ( jugadorUno.artículos.length  <  jugadorDos.articulos.length )  {
    contadorPuntosJug2 ++ ;
  }  else  {
    contadorPuntosJug1 ++ ;
    contadorPuntosJug2 ++ ;
  }
  
  //DEFINIENDO EL GANADOR DE LA PARTIDA

  let resultado;

  if(contadorPuntosJug1 > contadorPuntosJug2){
    ganador = jugadorUno.nombre;
  }else if(contadorPuntosJug1 < contadorPuntosJug2){
    ganador = jugadorDos.nombre;
  } else{
    ganador = "Empate";
  }

  resultado = {
  [jugadorUno.nombre] : contadorPuntosJug1,
  [jugadorDos.nombre] : contadorPuntosJug2,
  ganador : ganador,
  }

  console.log (resultado);
