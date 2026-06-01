package game;

// Esta interfaz la creamos para modificar la logica de nustro proyecto, este archivo se encargara
// de realizar los ataques y medir el daño, en vez de hacerlo en la propia clase de las entidades
public interface ComportamientoAtaque {
    // Recibe un objetivo (del tipo base Enemy)
    int ejecutarAtaque(Enemy objetivo);
}