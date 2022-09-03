import Lista from "./Lista";

class Index {
  static main(args?: [string]): void {
    let lista: Lista<number> = new Lista();

    lista.insertar(1);
    lista.insertar(2);
    lista.insertar(3);
    // lista.eliminar(1);

    lista.mostrarLista();
  }
}
Index.main();
