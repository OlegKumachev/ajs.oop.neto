import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';
import Character from '../character';

test('Проверка характеристик', () => {
  expect(new Character('SomeName', 'Daemon')).toEqual({
    attack: 0, defence: 0, level: 1, health: 100, name: 'SomeName', type: 'Daemon'
  });
});

test('Должен выдать ошибку, если указано неверное имя', () => {
  expect(() => {
    new Character('J', 'Bowman');
  }).toThrow('Ошибка: Параметра name');
});

test('проверка типа', () => {
  expect(() => {
    new Character('Baki', 'Fighter');
  }).toThrow('неверный тип');
});


test('test class for Bowerman', () => {
  expect(new Bowerman('SomeName', 'Bowman' )).toEqual({
    attack: 25, defence: 25, level: 1, health: 100, name: 'SomeName', type: 'Bowman'
  });
});

test('test class for Swordsman', () => {
  const swordsman = new Swordsman('SomeName', 'Swordsman');
  expect(swordsman).toEqual({
    attack: 40, defence: 10, level: 1, health: 100, name: 'SomeName', type: 'Swordsman'
  });
});

test('test class for Magician', () => {
	const magician = new Magician('SomeName', 'Magician');
	expect(magician).toEqual({
 attack: 10, defence: 40, level: 1, health: 100, name: 'SomeName', type: 'Magician'
});
});

test('test class for Undead', () => {
	const undead = new Undead('SomeName', 'Undead');
	expect(undead).toEqual({
 attack: 25, defence: 25, level: 1, health: 100, name: 'SomeName', type: 'Undead'
});
});

test('test class for Zombie', () => {
	const zombie = new Zombie('SomeName', 'Zombie');
	expect(zombie).toEqual({
 attack: 40, defence: 10, level: 1, health: 100, name: 'SomeName', type: 'Zombie'
});
});

test('test class for Daemon', () => {
	const daemon = new Daemon('SomeName', 'Daemon');
	expect(daemon).toEqual({
 attack: 10, defence: 40, level: 1, health: 100, name: 'SomeName', type: 'Daemon'
});
});

test('test class for levelUp function for Bowerman', () => {
	const bowerman = new Bowerman('SomeName' ,'Bowman');
	bowerman.health = 50;
	bowerman.levelUp();
	expect(bowerman).toEqual({
		attack: 30, defence: 30, level: 2, health: 100, name: 'SomeName', type: 'Bowman'
});
});

test('test class for levelUp function for Swordsman', () => {
	const swordsman = new Swordsman('SomeName', 'Swordsman' );
	swordsman.health = 20;
	swordsman.levelUp();
	expect(swordsman).toEqual({
 attack: 48, defence: 12, level: 2, health: 100, name: 'SomeName', type: 'Swordsman'
});
});

test('test class for levelUp function for Magician', () => {
	const magician = new Magician('SomeName', 'Magician' );
	magician.levelUp();
	expect(magician).toEqual({
 attack: 12, defence: 48, level: 2, health: 100, name: 'SomeName', type: 'Magician' 
});
});



test('test function damage', () => {
  const daemon = new Daemon('SomeName', 'Daemon');
  daemon.damage(10);
  expect(daemon).toEqual({ attack: 10,defence: 40, level: 1, health: 94, name: 'SomeName',type: 'Daemon'
  });
});

test('test class for levelUp function for dead Magician', () => {
	const magician = new Magician('SomeName', 'Magician');
	magician.health = 0;

	expect(() => {
		magician.levelUp();
	}).toThrow();
});
