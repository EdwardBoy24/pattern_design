package game;

import external.robo.EnemyRobot;


public class RobotAdapter implements Enemy {
    
    private EnemyRobot robot;

    public RobotAdapter() {
        // Instanciamos el robot de la librería externa
        this.robot = new EnemyRobot();
        
        // el robot nace desactivado

        this.robot.bootSequence();
    }

    @Override
    public void move() {
        System.out.println("Adaptador: Ordenando al robot avanzar...");
        robot.moveForward(5);
    }

    @Override
    public int attack(Enemy enemy) {
        // Definimos el daño
        int damage = 15; 
        
        System.out.println("Adaptador: Ordenando al robot aplastar...");

        robot.smash(damage);
        
        // Le aplicamos el daño al objetivo
        enemy.takeDamage(damage);
        
        return damage;
    }

    @Override
    public void takeDamage(int damage) {
        System.out.println("Adaptador: El robot recibe un impacto...");
        // Traducimos el recibir daño
        robot.receiveShock(damage);
    }

    @Override
    public int getHealth() {
        // Traducimos la lectura de salud a lectura de energía, que es lo mismo parece
        return robot.energyLevel();
    }
}