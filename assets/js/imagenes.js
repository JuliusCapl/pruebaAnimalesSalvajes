import Animales from "./consulta.js"; 


//Trae las imagenes y las inyecta al preview
const imagenes = (() => {
    document.getElementById("animal").addEventListener("change", async () => {
        let espacio = document.getElementById("preview");
        let animalitos = document.getElementById("animal").value;
        let animales = await Animales.getData();

        searchAndWriteImg(espacio, animalitos, animales);

    });
    
    const searchAndWriteImg = (espacio, animalitos, animales) => {
        try {
            animales.animales.forEach(a => {                
                    if (a.name == animalitos) {
                        return espacio.setAttribute("style",`background-image:url(./assets/imgs/${a.imagen}`) 
                    }                
            });

        } catch (e) {
            console.log(e);
        }   
    }

}) ();

export default imagenes;




