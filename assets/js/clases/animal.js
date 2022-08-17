class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.get_Nombre = () => nombre;
        this.getEdad = () => edad;
        this.getImg = () => img;
        this.getComentarios = () => comentarios;
        this.getSonido = () => sonido;            
        }

        get nombre(){
            return this._nombre
        };
        get edad(){
            return this._edad 
        };
        get img(){
            return this._img
        };
        get comentarios(){
            return this._comentarios;
        };        
        get sonido(){
            return this._sonido
        };    
        set comentarios(nuevoComentario){
            this._comentarios = nuevoComentario;
        };
}
export default Animal;
