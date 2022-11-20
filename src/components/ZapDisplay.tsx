import { animated, useSpring } from 'react-spring';
import { DATA_SPELLS } from '../gameData';
import { SpellDisplay } from './SpellDisplay';

type Props = {
  zapLevel: number;
  spellCapacity: number;
};

export function ZapDisplay(props: Props) {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <animated.div
      style={fade}
      className="mb-2 flex justify-center items-center space-x-2"
    >
      <SpellDisplay
        name="lightning"
        maxLevel={DATA_SPELLS[0].damage.length}
        level={props.zapLevel}
        size="sm"
        quantity={props.spellCapacity}
      />
    </animated.div>
  );
}
