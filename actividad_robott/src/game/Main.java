package game;

// Ya no necesitamo importar external.robo.EnemyRobot aquí, lo hicimos de manera interna en su clase


public class Main {

    public static void main(String[] args) throws InterruptedException {
        Enemy enemy1 = new Player();
        Enemy enemy2 = new Player();
        
        // asi deberia verse visualmente creemos
        
        
        System.out.println("- El primer enemigo ataca -");
        Thread.sleep(2000); 
        enemy2.takeDamage(enemy1.attack(enemy2));
        Thread.sleep(2000); 
        System.out.println("Salud de enemigo 2: " + enemy2.getHealth());
        Thread.sleep(2000); 
  
        //para que se entienda que es un juego
        System.out.println("- El segundo enemigo ataca -");
        Thread.sleep(2000); 
        enemy1.takeDamage(enemy2.attack(enemy1));
        Thread.sleep(2000); 
        System.out.println("Salud de enemigo 1: " + enemy1.getHealth());
        Thread.sleep(2000); 

        System.out.println("\n- Liberando al robot adaptado -");
        Thread.sleep(2000); 
        
        // Instanciamos nuestro adaptador
        // internamente creara al robot y ejecutara su bootSequence
        Enemy  robotEnemy= new RobotAdapter(); 

        // Le ordenamos interactuar con los demas objetos, haber si funciona
        System.out.println("- El robot ataca -"); 
        robotEnemy.attack(enemy2);
        Thread.sleep(2000);
        
        
        System.out.println("\nSalud de enemigo 2 tras ser aplastado: " + enemy2.getHealth());
    }
}