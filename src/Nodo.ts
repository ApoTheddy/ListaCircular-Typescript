import { TNodo } from "./TipoUnicos";

export default class Nodo<T> {
  public siguiente: TNodo<T>;
  public dato: number;

  constructor(dato: number) {
    this.dato = dato;
    this.siguiente = this;
  }
}
