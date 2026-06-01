package game;


// Esta clase corresponde a uno de los ataqes posibles, es uno de los lados del puente
// este es el atake a distancia, calcula el daño internamente y lo retorna
public class AtaqueDistancia implements ComportamientoAtaque {
    @Override
    public int ejecutarAtaque(Enemy objetivo) {
        System.out.println("¡Lanzando un proyectil a larga distancia!");
        int danio = 8;
        objetivo.takeDamage(danio); 
        return danio;
    }
}