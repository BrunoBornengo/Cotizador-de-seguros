const ingreso = document.getElementById('ingreso');
const botonIngreso = document.getElementById('botonIngreso');
const seccionCotizador = document.getElementById('seccionCotizador')
const datosGuardados = localStorage.getItem('cotizacion') ? JSON.parse(localStorage.getItem('cotizacion')) : null;

botonIngreso.addEventListener('click', function() {
    // Inicio sesion y paso al cotizador
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        ingreso.style.display = 'none';
      seccionCotizador.style.display = 'block';
    }
    localStorage.setItem('Nombre', JSON.stringify(nombre));
    Swal.fire({
        title: '¡Bienvenido!',
        text: `Hola, ${nombre}!`,
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
            ingreso.style.display = 'none';
            seccionCotizador.style.display = 'block';
        }
      });
    ;
  });

  const cotizarSeguro=()=>{
//Recupero los elementos que tengo en el formulario//
    let marca = document.querySelector("#marca").value;
    let anio = document.querySelector("#anio").value;
    let basico = document.querySelector("#basico");
    let completo = document.querySelector("#completo");

    let resumen = document.querySelector("#resumen");
    let resultado = document.querySelector("#resultado");
    resultado.style.display="none"

    let plan="";

    if(basico.checked){
        plan="basico";
    }else if(completo.checked){
        plan="completo";
    }

    if(marca ==='' || anio === '' || plan === ''){
        mostrarError("#msj-error-cotizador", "Seleccione todas las opciones")
        return;
    }

    let cotizacion={marca, anio, plan};
    localStorage.setItem('Cotizacion', JSON.stringify(cotizacion));
    document.querySelector("#msj").style.display="none"

    resumen.style.backgroundColor="FFF";
    resumen.style.display="block";

    
    resumen.innerHTML=`<div style:text-align:center></div>`;
    
    setTimeout(()=>{
        resumen.style.backgroundColor="#00838f"
        resumen.innerHTML=`
                        <h2>Resumen de cotizacion</h2>
                        <ul>
                            <li>Marca: ${mayuscula(marca)}</li>
                            <li>Año: ${anio}</li>
                            <li>Plan: ${mayuscula(plan)}</li>
                        </ul>`;
        let cotizacionFinal = cotizar(cotizacion);
        resultado.style.display="block";
        resultado.className="resultado"
        resultado.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinal}</p>`;
    },2000);
}

const cotizar =(cotizacion)=>{
    const {marca,anio, plan}=cotizacion;
    // Obtener los datos guardados en el localStorage
    const datosGuardados = localStorage.getItem('cotizacion') ? JSON.parse(localStorage.getItem('cotizacion')) : null;

    let resultado = 2000;

    if(datosGuardados) {
        marca = datosGuardados.marca;
        anio = datosGuardados.anio;
        plan = datosGuardados.plan;
    }

    const diferenciaAnio=diferencia(anio);
    resultado-=((diferenciaAnio*3)*resultado)/100;

    resultado = calcularMarca(marca)*resultado;
    const incrementoPlan = obtenerPlan(plan);
    resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
    return resultado
}

const obtenerPlan=plan=>{
    return (plan==='basico')?1.20:1.50;
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


const mayuscula=(palabra)=>{
    return palabra.charAt(0).toUpperCase()+palabra.slice(1)
}

const mostrarError=(elemento,mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="alert alert-danger error">${mensaje}</p>`;
    setTimeout(()=>( divError.innerHTML=``), 2000);
}
