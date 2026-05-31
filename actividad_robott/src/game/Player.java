package game;

public class Player implements Enemy{
    private int life=100;
    private int posx;
    private int posy; 

    @Override
    public void move() {
        posx = (int)(Math.random() * 100);
        posy = (int)(Math.random() * 100);
    }

    @Override
    public int attack(Enemy enemy) {
        int golpe = (int)(Math.random() * 10); 
        return enemy.getHealth() - golpe;
    }

    @Override
    public void takeDamage(int damage) {
        life=damage;
    }

    @Override
    public int getHealth() {
        return life;
    }

    public int getPosx(){
        return this.posx;
    }
    public void setPosx(int x){
        this.posx=x;
    }
}
