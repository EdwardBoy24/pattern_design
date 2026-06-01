package game;

// Esta clase corresponde a otro de los ataques posibles, es uno de los lados del puente
// este es el atake a melee, calcula el daño internamente y lo retorna
public class AtaqueCuerpoACuerpo implements ComportamientoAtaque {
    @Override
    public int ejecutarAtaque(Enemy objetivo) {
        System.out.println("¡Ejecutando un poderoso ataque cuerpo a cuerpo!");
        int danio = 10;
        objetivo.takeDamage(danio); // Aplica el impacto
        return danio;
    }
}