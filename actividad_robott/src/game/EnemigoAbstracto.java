package game;

// en este archivo creamos una clase abstracta que sirva para todos, contiene lo mismo que player, pero
//modificado con laa cosas que necesitamos

public abstract class EnemigoAbstracto implements Enemy {
    // Esta variable es realmente nuestro puente, es un atributo de tipo objeto
    protected ComportamientoAtaque comportamientoAtaque; 
    
   
    protected int life;

    // nuestro constructor
    public EnemigoAbstracto(ComportamientoAtaque comportamientoAtaque, int life) {
        this.comportamientoAtaque = comportamientoAtaque;
        this.life = life;
    }

    // este metodo es nustra forma de cambiar el ataque en tiempo real
    public void setComportamientoAtaque(ComportamientoAtaque nuevoComportamiento) {
        this.comportamientoAtaque = nuevoComportamiento;
    }

    @Override
    public int attack(Enemy enemy) {
        // en vez de ejecutar el ataque en si, hacemos un llamado a la interfaz
        return comportamientoAtaque.ejecutarAtaque(enemy);
    }

    @Override
    public void takeDamage(int damage) {
        // con esto bajamos la vida, ahora si manera correcto
        this.life -= damage;
    }

    //mantenemos los otros metodos originales de player, aunque no lo usemos
    @Override
    public int getHealth() {
        return this.life;
    }

    
    @Override
    public abstract void move();
}