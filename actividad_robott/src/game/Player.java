package game;


// Ahora que tenemos nustra logica de pelea en otra clase, es necesario hacer cambios en
//nustra clase jugador, quitando laa cosas que ya no sirven

// Heredamos de nuestra nueva clase abstracta
public class Player extends EnemigoAbstracto {
    
    private int posx;
    private int posy;
    
    // Ahora el constructor pide que estilo de ataque tendra el jugador
    public Player(ComportamientoAtaque comportamiento) {
        // ahora le heredamos el "comportamiento" que tiene nuestro daño y el ataque, ademas de la vida
        super(comportamiento, 100); 
    }

    @Override
    public void move() {
        posx = (int) (Math.random() * 100);
        posy = (int) (Math.random() * 100);
    }

    public int getPosx() { return this.posx; }
    public void setPosx(int x) { this.posx = x; }
}