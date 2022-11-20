import React from 'react';
import { DATA_SPELLS } from '../gameData';
import { LevelRange } from './LevelRange';
import { SpellDisplay } from './SpellDisplay';

type Props = {
  zapLevel: number;
  quakeLevel: number;
  setZapLevel: (value: React.SetStateAction<number>) => void;
  setQuakeLevel: (value: React.SetStateAction<number>) => void;
};

export function InputSection(props: Props) {
  return (
    <div className="flex justify-evenly space-x-2 pt-4 px-6 lg:px-24 border-b dark:border-gray-500 bg-white dark:bg-gray-800">
      <div className="text-center mb-4">
        <SpellDisplay
          name="lightning"
          level={props.zapLevel}
          maxLevel={DATA_SPELLS[0].damage.length}
        />
        <LevelRange
          value={props.zapLevel}
          max={DATA_SPELLS[0].damage.length}
          onChange={(value) => props.setZapLevel(value)}
        />
      </div>
    </div>
  );
}
