import Animales from "./consulta.js";

const imagenes = (() => {
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
                                return espacio.innerHTML = `<img class="card-img-bottom" src="/assets/imgs/${a.imagen}"/>`
                            }

                        })
                    });

                } catch (e) {
                    console.log(e);
                }

            })
            .catch((e) => {
                console.log(e);
            })
    }

})();

export default imagenes;




