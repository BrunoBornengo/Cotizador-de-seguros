let bienvenida = prompt("Bienvenido, ¿Desea asegurar su auto? Si/No");

while (bienvenida != "Si" && bienvenida != "No") {
    alert ("Ingrese solo Si/No")

    bienvenida = prompt("Bienvenido, ¿Desea asegurar su auto?")
}

const cotizarSeguro=()=>{
//Recupero los elementos que tengo en el formulario//
    let marca = document.querySelector("#marca").value;
    let anio = document.querySelector("#anio").value;
    let basico = document.querySelector("#basico");
    let completo = document.querySelector("#completo");

    let resumen = document.querySelector("#resumen");
    let resultado = document.querySelector("#resultado");

    let plan="";

    if(basico.checked){
        plan="basico";
    }else if(completo.checked){
        plan="completo";
    }

    if(marca ==='' || anio === '' || plan === ''){
        mostrarError("#mensaje-error", "Seleccione todas las opciones")
        return;
    }

    let cotizacion={marca, anio, plan};
    document.querySelector("#msj").style.display="none"

    resumen.style.backgroundColor="FFF";
    resumen.style.display="block";

    
    resumen.innerHTML=`<div style:text-align:center></div>`;
    
    setTimeout(()=>{
        resumen.innerHTML=`
                        <h2>Resumen de cotizacion</h2>
                        <ul>
                            <li>Marca: ${marca}</li>
                            <li>Año: ${anio}</li>
                            <li>Plan: ${plan}</li>
                        </ul>`;
        let cotizacionFinal = cotizar(cotizacion);
        resultado.style.display="block";
        resultado.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinal}</p>`;
    },2000);
}

const cotizar =(cotizacion)=>{
    const {marca,anio, plan}=cotizacion;
    let resultado=2000;

    const diferenciaAnio=diferencia(anio);
    resultado-=((diferenciaAnio*3)*resultado)/100;

    resultado = calcularMarca(marca)*resultado;
    const incrementoPlan = obtenerPlan(plan);
    resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
    return resultado
}

function obtenerPlan(plan){
    if(plan==='basico'){
      return 1.20;
    } else {
      return 1.50;
    }
  }

const calcularMarca=marca=>{
    let incremento;

    switch (marca) {
        case 'ranger':
            incremento=1.30;
            break;
        
        case 'focus':
            incremento=1.30;
            break;  

        case 'clio':
            incremento=1.15;
            break;

        case 'sandero':
            incremento=1.15;
            break;
        
        case 'corsa':
            incremento=1.05;
            break;   
            
        case 'onix':
            incremento=1.05;
            break;    
        default:
            break;
    }
    return incremento;
}

const diferencia=(anio)=>{
    return new Date().getFullYear()-anio;
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
