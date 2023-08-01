let bienvenida = prompt("Bienvenido, ¿Desea asegurar su auto? Si/No");

while (bienvenida != "Si" && bienvenida != "No") {
    alert ("Ingrese solo Si/No")

    bienvenida = prompt("Bienvenido, ¿Desea asegurar su auto?")
}

const cotizarSeguro=()=>{
//Recupero los elementos que tengo en el formulario//
    let marca = document.querySelector("#marca").value;
    let año = document.querySelector("#año").value;
    let basico = document.querySelector("#basico");
    let completo = document.querySelector("#completo");

    let resumen = document.querySelector("#resumen").value;
    let resultado = document.querySelector("#resultado").value;

    let plan="";

    if(basico.checked){
        plan="basico";
    }else if(completo.checked){
        plan="completo";
    }

    if(marca ==='' || año === '' || plan === ''){
        mostrarError("#mensaje-error", "Seleccione todas las opciones")
        return;
    }

    let cotizacion={marca, año, plan};
}

const mostrarError=(elemento,mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="alerta-error">${mensaje}</p>`;
    setTimeout(()=>( divError.innerHTML=``), 2000);
}




// if(bienvenida == "Si"){
//     alert ("A continuacion elija el modelo de su auto")
// } else{
//     alert ("Gracias, vuelva pronto")
// }



// console.log(bienvenida)

// while (bienvenida != "no"){
//     let marca = prompt("Ford - Renault - Peugeot - Chevrolet - Volkswagen - Fiat")

//     var modelo = ""

//     if (marca == "Ford" || marca == "Renault" || marca == "Peugeot" || marca == "Chevrolet" || marca == "Volkswagen" || marca == "Fiat") {
//         switch (marca) {
//             case "Ford":
//                 modelo = "Ranger, Focus"
//                 break;
            
//             case "Renault":
//                 modelo = "Clio, Sandero"
//                 break

//             case "Peugeot":
//                 modelo = "206, 207"
//                 break

//             case "Chevrolet":
//                 modelo = "Corsa, Onix"
//                 break

//             case "Volkswagen":
//                 modelo = "Gol, Up"
//                 break

//             case "Fiat":
//                 modelo = "Palio, Punto"
//                 break

//             default:
//                 break;
//         }
//     }

//     else{
//         alert("Ingrese una de las opciones mostradas en pantalla")
//     }

//     bienvenida = prompt("¿Desea continuar?")

//     while (bienvenida === "no") {
//         prompt("Gracias, vuelva pronto")
        
//     }

//     modelo = prompt("Seleccione el modelo de su auto: " + modelo)

//     console.log(modelo)
    
//         break
// }


// let año = prompt("Muy bien, ahora elija el año de su auto")

// function respuestas() {
//    console.log("Su respuesta fue: " + modelo + ' ' + año)
// }

// respuestas()
