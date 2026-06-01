package game;

public class Main {

    //Modificamos nustro main, a diferencia de antes, ahora nuestros comportamientos se deben instanciar
    // al igual que nustros enemigos
    
    public static void main(String[] args) throws InterruptedException {
        //
        ComportamientoAtaque ataqueMelee = new AtaqueCuerpoACuerpo();
        ComportamientoAtaque ataqueRango = new AtaqueDistancia();

        // Ahora nuestros enemigos deben tener como argumento un compartamientos de combate desde el inicio
        EnemigoAbstracto enemigo1 = new Player(ataqueMelee); 
        Enemy enemigo2 = new Player(ataqueRango); 

        System.out.println("- Ronda 1: Enemigo 1 ataca a Enemigo 2 -");
        enemigo1.attack(enemigo2);
        Thread.sleep(2000);
        System.out.println("Salud del enemigo 2 restante: " + enemigo2.getHealth());
        Thread.sleep(2000);

        System.out.println("\n- Ronda 2: Enemigo 1 ataca a Enemigo 2 -");
        System.out.println("Cambiando el estilo de ataque del Enemigo 1 a Distancia...");
        Thread.sleep(2000);
        // Probamos que realmente puedan cambiar de comportamiento en medio de la ejecucion
        enemigo1.setComportamientoAtaque(ataqueRango); 
        
        enemigo1.attack(enemigo2); //volvemos a atacar, esta vez con el estilo acambiado
        System.out.println("Salud del enemigo 2 restante: " + enemigo2.getHealth());
        Thread.sleep(2000);
        
        System.out.println("- Ronda 4: El robot ataca a enemigo 2 -"); 
        // Aqui dejamos nuestro robot anterior de adapter
        // internamente creara al robot y ejecutara su bootSequence
        Enemy  robotEnemy= new RobotAdapter(); 

        // Le ordenamos interactuar con los demas objetos, haber si funciona
        System.out.println("- El robot ataca -"); 
        robotEnemy.attack(enemigo2);
        Thread.sleep(2000);
        
        
        System.out.println("\nSalud de enemigo 2 tras ser aplastado: " + enemigo2.getHealth());
    }
}
        
        
    
