import Animal from "./animal.js";

//subclases
class Leon extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    rugir(){
        console.log("rugido");
    }
}
class Lobo extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    aullar(){
        console.log("aullido")
    }
}
class Oso extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    grunir(){
        console.log("grunido")
    }
}
class Serpiente extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    sisear(){
        console.log("sisido")
    }
}
class Aguila extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    chillar(){
        console.log("chillido")
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};