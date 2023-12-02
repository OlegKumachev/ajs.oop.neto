export default class Character { 
    constructor (name, type) { 
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Ошибка: Параметра name');
        }

        const allowedType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!allowedType.includes(type)){
            throw new Error('неверный тип');
        };
        this.name = name,
        this.type = type,
        this.health = 100,
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }   

    levelUp() {
        if (this.health === 0) {
            throw new Error('Ошибка: Нельзя повысить левел павшего героя!');
        }
        this.level += 1;
        this.attack  *=1.2;
        this.defence *= 1.2;
        this.health = 100;
    }
    
    damage(points) {
        this.health -= points * (1 - this.defence / 100)

        }
    }
