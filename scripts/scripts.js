class Creature {
    number;
    id = 0;
    name;
    healthPoints;
    damage;
    defeat (who) {
        alert(`${who} уничтожен`);
    };
    constructor(name, healthPoints, damage) {
        this.id++;
    }
}

class Player extends Creature {
    #lvl;
    attack(other) {
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0) {
            super.defeat(other.name);
            this.#lvl++;
            return true;
        }
        return true;
    }
    get lvl() {
        return this.#lvl;
    }
    set lvl(lvl) {
        this.#lvl = lvl;
    }
}
class Enemy extends Creature {
    attack(other) {
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0) {
            super.defeat(other.name);
            return true;
        }
        return false;
    }
}
const player = new Player('Царь', 999, 99);
player.number = 1;
player.lvl = 1;
player.name = 'Царь';
player.healthPoints = 999;
player.damage = 99;
const enemy = new Enemy('Чухан', 666, 2);
enemy.number = 1;
enemy.name = 'Чухан';
enemy.healthPoints = 666;
enemy.damage = 2;
for (var i = 0; i < 999; i++) {
    player.attack(enemy);
    player.attack(enemy);
    player.attack(enemy);
    enemy.attack(player);
    if(player.healthPoints <= 0 || enemy.healthPoints <= 0) {
        alert(`Убил за  ${i + 1}  ударов`);
        break;
    }
}
console.log(player);
console.log(enemy);