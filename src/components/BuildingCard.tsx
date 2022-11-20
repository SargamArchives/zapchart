import React, { useEffect, useState } from 'react';
import { Building, DATA_SPELLS } from '../gameData';
import { BuildingHeader } from './BuildingHeader';
import { LevelRange } from './LevelRange';
import { ZapDisplay } from './ZapDisplay';

type Props = {
  zapLevel: number;
  spellCapacity: number;
  building: Building;
};

function getZapNumber(props: Props, buildingLevel: number) {
  const hp = props.building.hp[buildingLevel - 1];
  const zapDamage = DATA_SPELLS[0].damage[props.zapLevel - 1];
  return Math.ceil(hp / zapDamage);
}

export function BuildingCard(props: Props) {
  const [buildingLevel, setBuildingLevel] = useState(props.building.hp.length);
  const zapNumber = getZapNumber(props, buildingLevel);

  return (
    <div className="rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800">
      <BuildingHeader building={props.building} level={buildingLevel} />
      <div className="mb-2">
        <LevelRange
          value={buildingLevel}
          max={props.building.hp.length}
          onChange={(value) => setBuildingLevel(value)}
        />
      </div>
      <ZapDisplay
        spellCapacity={zapNumber}
        zapLevel={props.zapLevel}
      ></ZapDisplay>
    </div>
  );
}
