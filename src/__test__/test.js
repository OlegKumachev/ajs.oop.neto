import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';
import Character from '../character';

test('test name', () => {
  expect(() => {
    new Character('J', 'Bowman');
  }).toThrow('Ошибка: Параметра name');
});

test('test type', () => {
  expect(() => {
    new Character('Baki', 'Fighter');
  }).toThrow('неверный тип');
});

describe('test', () => {
	const testCases = [ {
		incomingObject: new Character('SomeName', 'Daemon'),
		expencted: {attack: undefined, defence: undefined, level: 1, health: 100, name: 'SomeName', type: 'Daemon'}
	},
	{
		incomingObject: new Bowerman('SomeName', 'Bowman' ),
		expencted: {attack: 25, defence: 25, level: 1, health: 100, name: 'SomeName', type: 'Bowman'}
	},
	{	
		incomingObject: new Swordsman('SomeName', 'Bowman' ),
		expencted: {attack: 40, defence: 10, level: 1, health: 100, name: 'SomeName', type: 'Swordsman'}
	},
	{	
		incomingObject: new Magician('SomeName', 'Magician'),
		expencted: {attack: 10, defence: 40, level: 1, health: 100, name: 'SomeName', type: 'Magician'}
	},
	{	
		incomingObject: new Undead('SomeName', 'Undead'),
		expencted: {attack: 25, defence: 25, level: 1, health: 100, name: 'SomeName', type: 'Undead'}
	},
	{	
		incomingObject: new Zombie('SomeName', 'Zombie'),
		expencted: {attack: 40, defence: 10, level: 1, health: 100, name: 'SomeName', type: 'Zombie'}
	},
	{	
		incomingObject: new Daemon('SomeName', 'Daemon'),
		expencted: {attack: 10, defence: 40, level: 1, health: 100, name: 'SomeName', type: 'Daemon'}
	},
	];

	testCases.forEach(test => {
		it(`test ${test.incomingObject.type}`, () => {
			const result = test.incomingObject
			expect(result).toEqual(test.expencted)
		})
 	})
});

test('test function levelUP', () => {
	const bowerman = new Bowerman('SomeName' ,'Bowman');
	bowerman.health = 50;
	bowerman.levelUp();
	expect(bowerman).toEqual({
		attack: 30, defence: 30, level: 2, health: 100, name: 'SomeName', type: 'Bowman'
});
});

test('test function damage', () => {
  const daemon = new Daemon('SomeName', 'Daemon');
  daemon.damage(10);
  expect(daemon).toEqual({ attack: 10,defence: 40, level: 1, health: 94, name: 'SomeName',type: 'Daemon'
  });
});

test('test function for dead Magician', () => {
	const magician = new Magician('SomeName', 'Magician');
	magician.health = 0;

	expect(() => {
		magician.levelUp();
	}).toThrow();
});
