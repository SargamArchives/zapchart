export type Building = {
  id: string;
  name: string;
  hp: number[];
};

export type Spell = {
  id: string;
  damage: number[];
};

// prettier - ignore;
export const DATA_BUILDINGS: Building[] = [
  { id: 'ab', name: 'Air Bombs', hp: [2300, 2550, 2700, 2950, 3200] },
  { id: 'ad', name: 'Air Defence', hp: [1400, 1500, 1600, 1700, 1800] },
  { id: 'bb', name: 'Blast Bow', hp: [4800, 5400, 6000, 6600, 7200] },
  { id: 'bt', name: 'Bomb Tower', hp: [2000, 2250, 2500, 2750, 3000] },
  { id: 'c', name: 'Crusher', hp: [2300, 2550, 2700, 2950, 3200] },
  { id: 'ca', name: 'Cannon', hp: [1250, 1450, 1700, 2000, 2300] },
  { id: 'gc', name: 'Giant Cannon', hp: [3700, 3900, 4100, 4300, 4500] },
  { id: 'hmt', name: 'Hidden Mega Tesla', hp: [1800, 2000, 2200, 2400, 2600] },
  { id: 'it', name: 'Inferno Tower', hp: [3600, 4000, 4400, 4800, 5200] },
  { id: 'mc', name: 'Multi Cannon', hp: [1800, 2050, 2300, 2550, 2800] },
  { id: 'mm', name: 'Multi Mortar', hp: [1700, 1900, 2100, 2300, 2500] },
  { id: 'rr', name: 'Rapid Rockets', hp: [1400, 1500, 1600, 1700, 1800] },
  { id: 'st', name: 'Spear Thrower', hp: [1200, 1400, 1600, 1800, 2000] },
  { id: 'sw', name: 'Super Wizard Tower', hp: [1800, 2100, 2400, 2700, 3000] },
];

// prettier - ignore;
export const DATA_SPELLS: Spell[] = [
  { id: 'lightning', damage: [250, 300, 350, 400, 450] },
];
