export class Pizza {
    nombre: string;
    ingredientes: string;
    imagen: string;
    precio: number;

    constructor(nombre: string, ingredientes: string, imagen: string, precio: number) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.imagen = imagen;
        this.precio = precio;
    }


}