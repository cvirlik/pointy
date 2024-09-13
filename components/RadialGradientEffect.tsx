import { Defs, RadialGradient, Rect, Stop, Svg } from 'react-native-svg';

import { useTheme } from '@/providers/ThemeProvider';

type RadialGradientEffectProps = {
  cx?: string | number;
  cy?: string | number;
  rx?: string | number;
  ry?: string | number;
  fx?: string | number;
  fy?: string | number;
};

export function RadialGradientEffect(props: RadialGradientEffectProps) {
  const theme = useTheme().theme;
  return (
    <Svg style={[{ position: 'absolute' }]}>
      <Defs>
        <RadialGradient
          id="grad"
          cx={props.cx}
          cy={props.cy}
          rx={props.rx}
          ry={props.ry}
          fx={props.fx}
          fy={props.fy}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor={theme.effectFrom} stopOpacity="1" />
          <Stop offset="1" stopColor={theme.foreground} stopOpacity="1" />
        </RadialGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" rx={16} />
    </Svg>
  );
}
