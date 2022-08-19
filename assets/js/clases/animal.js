//clase padre
class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;
 
        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;    
        this.getImg = () => _img;
        this.getComentarios = () => _comentarios;
        this.getSonido = () => _sonido;  
        this.setComentario = (nuevoComentario) => (_comentarios = nuevoComentario);        
        }

        updateComentary() {
            let comentario = this.getComentarios();
            this.setComentario(comentario);
        }

        get nombre(){
            return this.getNombre();
        };
        get edad(){
            return this.getEdad(); 
        };
        get img(){
            return "./assets/imgs/" + this.getImg();
        };
        get comentarios(){
            return this.getComentarios();
        };        
        get sonido(){
            return this.getSonido();
        };    
        set comentarios(nuevoComentario){
            this.setComentario(nuevoComentario);
        };

}
export default Animal;
