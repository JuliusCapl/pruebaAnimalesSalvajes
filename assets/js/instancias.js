import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/especies.js"
console.log("holaaaaa");
const arregloAnimales = [];
let acumulador = "";

window.ruido = (sonido) => {
  let audio = new Audio(`./assets/sounds/${sonido}`);   
  audio.play()
}

const limpiar = ()=>{
  document.getElementById("animal").value ="";
  document.getElementById("edad").value ="";
  document.getElementById("comentarios").value ="";
  document.getElementById("preview").style.backgroundImage = "url('./assets/imgs/lion.svg')"
}

const insertar = () => {
    acumulador = "";
    const cuadroAnimales = document.getElementById("Animales");
    arregloAnimales.forEach((animal, index) =>{
        
    acumulador += `
      <div class="tar card col-3" style="width: 18rem;">
          <img src="${arregloAnimales[index].img}" class="card-img-top" alt="animal">
          <div class="card-body">
            <a onclick="ruido('${arregloAnimales[index].sonido}')" class="btn"><i class="fa-solid fa-volume-high"></i>
            </a>
          </div>
        </div>
    `
} )
    cuadroAnimales.innerHTML = acumulador;
}


const registrar = document.getElementById("btnRegistrar");
const formulario = document.getElementById("myForm");

registrar.addEventListener("click", (e)=>{
    //e.preventDefault;
    let nombre = document.getElementById("animal").value;
    let edad = document.getElementById("edad").value;
    let comentarios = document.getElementById("comentarios").value;
    let sonido = "";
    
    if (nombre == "Leon"){
    const nuevoLeon = new Leon (nombre,edad,"Leon.png",comentarios,"Rugido.mp3");
    arregloAnimales.push(nuevoLeon)
    } else if (nombre == "Oso"){
    const nuevoOso = new Oso (nombre,edad,"Oso.jpg",comentarios,"Gruñido.mp3");
    arregloAnimales.push(nuevoOso)
    } else if (nombre == "Lobo"){
    const nuevoLobo = new Lobo (nombre,edad,"Lobo.jpg",comentarios,"Aullido.mp3");
    arregloAnimales.push(nuevoLobo)
    } else if (nombre == "Serpiente"){
    const nuevoSerpiente = new Serpiente (nombre,edad,"Serpiente.jpg",comentarios,"Siseo.mp3");
    arregloAnimales.push(nuevoSerpiente)
    } else if (nombre == "Aguila"){
    const nuevoAguila = new Aguila (nombre,edad,"Aguila.png",comentarios,"Chillido.mp3");
    arregloAnimales.push(nuevoAguila)
    };


console.log(arregloAnimales);


insertar();

limpiar();
})

