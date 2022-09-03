import Nodo from "./Nodo";
import { TNodo } from "./TipoUnicos";

export default class Lista<T> {
  private ultimo: TNodo<T>;

  constructor() {
    this.ultimo = null;
  }

  // Metodo para verificar si mi lista de nodos se encuentra vacia
  public estaVacia(): boolean {
    return this.ultimo == null;
  }

  // Metodo para insertat un nodo
  public insertar(dato: number): Lista<T> {
    let nuevo: TNodo<T> = new Nodo(dato);

    if (this.ultimo != null) {
      nuevo.siguiente = this.ultimo!.siguiente;
      this.ultimo!.siguiente = nuevo;
    }
    this.ultimo = nuevo;
    return this;
  }

  // Metodo para mostrar la lista de nodos
  public mostrarLista(): void {
    let aux: TNodo<T> = this.ultimo!.siguiente;
    let cadena: string = "";

    do {
      cadena = cadena += `[${aux!.dato}]->`;
      aux = aux!.siguiente;
    } while (aux != this.ultimo!.siguiente);
    console.log(cadena);
  }

  // Metodo para eliminar un elemento del nodo
  public eliminar(elemento: T) {
    let actual: TNodo<T>;
    let encontrado: boolean = false;
    actual = this.ultimo;

    while (actual!.siguiente != null && !encontrado) {
      encontrado = actual!.siguiente.dato == elemento;
      if (!encontrado) actual = actual!.siguiente;
    }

    encontrado = actual!.siguiente!.dato == elemento;
    if (encontrado) {
      let aux: TNodo<T> = actual!.siguiente;

      if (this.ultimo == this.ultimo!.siguiente) {
        this.ultimo = null;
      } else {
        if (aux == this.ultimo) this.ultimo = actual;
        actual!.siguiente = aux!.siguiente;
      }
    }
    return encontrado;
  }
}
