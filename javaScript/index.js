let bienvenida = prompt("Bienvenido, ¿Desea asegurar su auto? Si/No")


while (bienvenida != "Si" && bienvenida != "No") {
    alert ("Ingrese solo Si/No")

    bienvenida = prompt("Bienvenido, ¿Desea asegurar su auto?")
}

if(bienvenida == "Si"){
    alert ("A continuacion elija la marca de su auto")
} else{
    alert ("Gracias, vuelva pronto")
}

console.log(bienvenida)

while (bienvenida != "no"){
    let marca = prompt("Ford - Renault - Peugeot - Chevrolet - Volkswagen - Fiat")

    var modelo = ""

    if (marca == "Ford" || marca == "Renault" || marca == "Peugeot" || marca == "Chevrolet" || marca == "Volkswagen" || marca == "Fiat") {
        switch (marca) {
            case "Ford":
                modelo = "Ranger, Focus"
                break;
            
            case "Renault":
                modelo = "Clio, Sandero"
                break

            case "Peugeot":
                modelo = "206, 207"
                break

            case "Chevrolet":
                modelo = "Corsa, Onix"
                break

            case "Volkswagen":
                modelo = "Gol, Up"
                break

            case "Fiat":
                modelo = "Palio, Punto"
                break

            default:
                break;
        }
    }

    else{
        alert("Ingrese una de las opciones mostradas en pantalla")
    }

    bienvenida = prompt("¿Desea continuar?")

    while (bienvenida === "no") {
        prompt("Gracias, vuelva pronto")
        
    }

    modelo = prompt("Seleccione el modelo de su auto: " + modelo)

    console.log(modelo)
    
        break
}


let año = prompt("Muy bien, ahora elija el año de su auto")

function respuestas() {
   console.log("Su respuesta fue: " + modelo + ' ' + año)
}

respuestas()

// const productos = [
//     {nombre: "balanceado", precio: 1500},
//     {nombre: "pipeta", precio: 500},
//     {nombre: "collar", precio: 150},
//     {nombre: "juguete", precio: 80},
//     {nombre: "analgésico", precio: 100}
// ]

// let carrito = []

/* Declaro la variable selección de productos */

// let seleccion = prompt("Bienvenido a VetCare, ¿desea comprar algún producto? si/no " )

//Inicio un Bucle para darle dos opciones al usuario SI Y NO

// while (seleccion !="si" && seleccion !="no"){
//     alert("¿Deseas continuar a la compra? Ingresa solo si/no")

//     // Al haber declarado seleccion con LET y a su vez ser una var global, puedo modificar su valor acá dentro
//     seleccion = prompt("Bienvenido a VetCare, ¿desea comprar algún producto? si/no " ) 
// }
// if (seleccion === "si"){
//     alert("A continuación te enseñamos la lista de productos -> ")
// }
// else if (seleccion === "no"){
//     alert("¡Te esperamos pronto!")
// }

//2do bucle 

// while (seleccion !="no"){
//     let producto  = prompt("Elige un producto:  balanceado $1500 - pipeta $500 - collar $150 - juguete $80 - analgésico $100")

//     //declaro variable local precio para poder ir modificandola en cada caso a continuación 
//     let precio = 0 

//     if (producto == "balanceado" || producto == "pipeta" || producto == "collar" || producto == "juguete" || producto == "analgésico" ) {
//         switch(producto){
//             case "balanceado":
//                 precio = 1500;
//                 break;
//             case "pipeta":
//                 precio = 500;
//                 break;

//             case "collar":
//                 precio = 150;
//                 break;

//             case "juguete":
//                 precio = 80;
//                 break;

//             case "analgésico":
//                 precio = 100;
//                 break;

//             default:
//                 break;
//         }

    //a partir de acá comienzo a meter la información que quiero dentro del carrito
    // let unidades = parseInt(prompt("¿Cuantas unidades desea agregar?")) 

    // carrito.push ({producto, unidades, precio})
    // console.log(carrito)
    // } 
    // else{
    //     alert("Ingrese un producto dentro de los mencionados")}

    // seleccion = prompt("¿Desea seguir comprando?")

    // while (seleccion === "no"){
    //     alert("¡Gracias por tu compra! Apretá F12 para ver tu carrito")

    //     //utilizo forEach para recorrer el carrito
    //     carrito.forEach((carritoFinal) => {
    //         console.log(`PRODUCTO: ${carritoFinal.producto} UNIDADES: ${carritoFinal.unidades} TOTAL ${carritoFinal.unidades * carritoFinal.precio}`)
    //     }) 
    //     break;
    // }
// }

// //declaro la suma del total del carrito utilizando el método reduce para que me traiga los datos que le solicito utilizando los parámetros acumulador y elementos declarados en carrito y realizo los cálculos
// const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
// console.log(`El total a pagar es de: ${total}`)