import Animales from "./consulta.js";


document.getElementById("animal").addEventListener("change", async () => {
    let espacio = document.getElementById("preview");
    let animalitos = document.getElementById("animal").value;
    let animales = await Animales.getData();
    
    searchAndWriteImg(espacio, animalitos, animales);

});

const searchAndWriteImg = (espacio, animalitos, animales) => {
    Promise.all([animales])
        .then(resp => {    
            try {
                resp.forEach(a => {
                    a.animales.forEach(a => {
                        if (a.name == animalitos) {
                            return espacio.innerHTML = `<img  src="/assets/imgs/${a.imagen}"/>`
                        }

                    })
                });

            } catch (error) {
                console.log(error);
            }

        })
        .catch((e) => {
            console.log(e);
        })
}



