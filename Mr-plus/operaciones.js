//CREATED BY HECTOR ABARAHAM BECERRA LUQUIN ´´//´´
'use strict'

let losSignos = ""; //variable que recibira los valores de los signos
let variable = null; //valor el cual su valor sera variable dependiendo de los numeros que se tecleen
let variable2 = null; //su funcion es de acumulador, en esta se guardan los valores de las operaciones
let variableArr = []; //almacenara en forma de cadena los datos introducido, para poder ser mostrados en pantalla
let Signo2 = null; // variable que acumula los signos, con esta se haran las operaciones pendientes
let bloqueaSigno = true; // variable para evitar insercion de signos cuando no haya cifras y asi evitar malas operaciones


//funcion que recibira de parametro el numero tecleado en la calculadora
function cifras(numero){ 

   bloqueaSigno = false; //se quita el bloqueador de signo

   //para resetear de 0 la calculadora al presionar el boton "RESET"
   if(numero =="RESET"){
      document.getElementById("screen").value =""; 
      for(var i = 0; i<variableArr.length; i++){ 
         variableArr[i] = "";                
      }
      variable = null;
      variable2 = null;
      Signo2 = null;
      bloqueaSigno = true;
      document.getElementById("botonaso0").disabled = false;
      document.getElementById("botonaso1").disabled = false;
      document.getElementById("botonaso2").disabled = false;
      document.getElementById("botonaso3").disabled = false;
      document.getElementById("botonaso4").disabled = false;
      document.getElementById("botonaso5").disabled = false;
      document.getElementById("botonaso6").disabled = false;
      document.getElementById("botonaso7").disabled = false;
      document.getElementById("botonaso8").disabled = false;
      document.getElementById("botonaso9").disabled = false;
      document.getElementById("decimal").disabled = false;
      document.getElementById("botonaso+").disabled = false;
      document.getElementById("botonaso-").disabled = false;
      document.getElementById("botonaso*").disabled = false;
      document.getElementById("botonaso/").disabled = false;
      document.getElementById("botonaso=").disabled = false;
      return variable, variable2, Signo2, bloqueaSigno;
      
   }

   else{
   
   variable = numero;

   /*se transforma los numeros de flotante a string para poder separar los signos de los numeros
   y asi poder mostrar tanto los numeros y signos en panatalla*/
   variableArr.push(variable.toString());

   //imprime el valor en la pantalla de la calculadora
    document.getElementById("screen").value = variableArr.join(""); 

    //"variable" transforma a flotante el valor construido por el arreglo "variableArr"

      variable = parseFloat(variableArr.join(""));
   }
}

//---------------------------------------------------------------------------------------

//funcion que checa los signos introducidos y hace las operaciones
function signos(elSigno){ 

   //pequeño chequeo para evitar poner signos sin cifras 
if(bloqueaSigno==true){
   alert("seleccione un numero un antes de seleccionar un signo");
}

else{
   losSignos = elSigno;
   bloqueaSigno = true;

   /*Signo 2, sirve para depositar signos matematicos temporales, 
   esto con el fin de hacer operaciones dinamicas sin necesidad de presionar el boton 
   "="*/
   if(Signo2==null){
      Signo2 = losSignos;
      console.log(Signo2);
   }

   if(variable==null){
      variable = null;
   }
   else{
         if(losSignos=="+"){
            document.getElementById("screen").value = losSignos;

         /*el for sirve para borrar el contenido del arreglo "variableArr"
         esto es necesario para no mezclar los nuevos valores con
         los viejos valores del arreglo "variableArr" y se muestre sin confusion en la calculadora*/
      
            for(var i = 0; i<variableArr.length; i++){ 
               variableArr[i] = "";                
            }

            
            /*si la variable2 esta en nulo, solamente tomara el valor que tenga variable
            y variable vuelve a ser nulo, ya que el acumulador va a ser variable 2*/
            if(variable2==null){
            variable2 = variable; 
            variable = null;
            return variable;
            }
            
      
            else{
               
               /*dentro del else, primero se checara que no haya operaciones pendientes*/
                  if(Signo2== "-"){
                     variable2 = variable2 - variable;
                     console.log("el for "+variable2);
                     Signo2 = losSignos;
                     variable = null;
                     return Signo2, variable, variable2;
                  }

                  if(Signo2=="*"){
                     variable2 = variable2 * variable;
                     Signo2 = losSignos;
                     variable = null;
                     return Signo2, variable, variable2;
                  }

                  if(Signo2=="/"){
                     variable2 = variable2/variable;
                     Signo2 = losSignos;
                     variable = null;
                     return Signo2, variable, variable2;
                  }

            /*regresamos variable a "null" debido a una condicional que esta dentro del metodo
            "elIgual()", asi se evita que las operaciones terminen con un signo en pantalla*/
            variable2 = variable2+variable;
            variable = null;
            return variable;
         }

      }
   //-------------------------------------------------------------------------------------

         if(losSignos=="-"){

            document.getElementById("screen").value = losSignos;

            for(var i = 0; i<variableArr.length; i++){ 
               variableArr[i] = "";                
            }


            if(variable2==null){
               variable2 = variable; 
               variable = null;
               return variable;
            }

            else{
               
            switch(Signo2){
                case"+":
                  variable2 = variable2 + variable;
                  console.log("el for "+variable2);
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
                  
               
                  case"*":
                  variable2 = variable2 * variable;
                  Signo2 = losSignos;
                  variable = null;
                  
                  return Signo2, variable, variable2;
                  
               

                  case"/":
                  variable2 = variable2/variable;
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
                  
               
               default:
               variable2 = variable2-variable;
               console.log("si no se cumple ningun if");
               variable = null;
               return variable;
            }
         }

      }
//--------------------------------------------------------------------------------------------

         if(losSignos=="*"){

            document.getElementById("screen").value = losSignos;

            for(var i = 0; i<variableArr.length; i++){ 
               variableArr[i] = "";                
            }


            if(variable2==null){
               variable2 = variable; 
               variable = null;
               return variable;
            }

            else{
               
               if(Signo2== "-"){
                  variable2 = variable2 - variable;
                  console.log("el for "+variable2);
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
               }

               if(Signo2=="+"){
                  variable2 = variable2 + variable;
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
               }

               if(Signo2=="/"){
                  variable2 = variable2/variable;
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
               }

               
               variable2 = variable2*variable;
               console.log("se hace la multi "+variable2);
               variable = null;
               return variable;

            }
         }
//-------------------------------------------------------------------------------

         if(losSignos=="/"){

            document.getElementById("screen").value = losSignos;

            for(var i = 0; i<variableArr.length; i++){ 
               variableArr[i] = "";                
            }


            if(variable2==null){
               variable2 = variable; 
               variable = null;
               return variable;
            }

            else{
               
               if(Signo2== "-"){
                  variable2 = variable2 - variable;
                  console.log("el for "+variable2);
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
               }

               if(Signo2=="+"){
                  variable2 = variable2 + variable;
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
               }

               if(Signo2=="*"){
                  variable2 = variable2*variable;
                  Signo2 = losSignos;
                  variable = null;
                  return Signo2, variable, variable2;
               }

               
               variable2 = variable2/variable;
               variable = null;
               return variable;
            }
         }

//------------------------------------------------------------------------------------------------
   }
 }
}

function elIgual(){
 
bloqueaSigno =false;

//limpiamos todo lo que tenia almacenado en el array, 
//y no se concatenen viejos valores con nuevos valores
for(var i = 0; i<variableArr.length; i++){ 
   variableArr[i] = "";                
}

/*primero checa que las variables tengan los valores correctos.
si detecta que despues de un signo, no introducimos algun numero y le damos al "="
mostrara el mensaje en pantalla de "SYNTAX ERROR" y desabilitara todos los botones
a excepcion del boton RESET*/

if (variable == null&&variable2 != null||isNaN(variable)){
   document.getElementById("screen").value = "SYNTAX ERROR, PLEASE PRESS RESET";
   document.getElementById("botonaso0").disabled = true;
   document.getElementById("botonaso1").disabled = true;
   document.getElementById("botonaso2").disabled = true;
   document.getElementById("botonaso3").disabled = true;
   document.getElementById("botonaso4").disabled = true;
   document.getElementById("botonaso5").disabled = true;
   document.getElementById("botonaso6").disabled = true;
   document.getElementById("botonaso7").disabled = true;
   document.getElementById("botonaso8").disabled = true;
   document.getElementById("botonaso9").disabled = true;
   document.getElementById("decimal").disabled = true;
   document.getElementById("botonaso+").disabled = true;
   document.getElementById("botonaso-").disabled = true;
   document.getElementById("botonaso*").disabled = true;
   document.getElementById("botonaso/").disabled = true;
   document.getElementById("botonaso=").disabled = true;
 }

/*segunda condicion, el cual checa que variable no este vacio, en caso de estarlo
 muestra mensaje en pantalla*/
 else if(variable==null||variable=="."){
   document.getElementById("screen").value = "PORFAVOR INTRODUSCA UN NUMERO";
}

/*si todo lo anterior no se cumplio, entonces hace las operaciones dependiendo del ultimo
signo introducido*/
else{

      if(losSignos== "+"){
      
         variable2 = variable2 + variable;
         document.getElementById("screen").value = variable2;
         variable = variable2;
         variable2 = null;
         Signo2 = null;
         losSignos = "";
         return variable2;
      
      }
//--------------------------------------------------------------------------------

      if(losSignos == "-"){

         variable2 = variable2 - variable;
         document.getElementById("screen").value = variable2;
         variable = variable2;
         variable2 = null;
         Signo2 = null;
         losSignos = "";
         return variable2;
      }

//------------------------------------------------------------------------
      if(losSignos == "*"){

         variable2 = variable2 * variable;
         document.getElementById("screen").value = variable2;
         variable = variable2;
         variable2 = null;
         Signo2 = null;
         losSignos = "";
         return variable2;
      }
//-------------------------------------------------------------------------

      if(losSignos == "/"){
         variable2 = variable2/variable;
         document.getElementById("screen").value = variable2;
         variable = variable2;
         variable2 = null;
         Signo2 = null;
         losSignos = "";
         return variable2;
      }

      
   }

}








