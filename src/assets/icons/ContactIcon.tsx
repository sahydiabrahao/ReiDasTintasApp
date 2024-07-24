import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function ContactIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M16.6667 29.3333C24.3986 29.3333 30.6667 23.0653 30.6667 15.3333C30.6667 7.60135 24.3986 1.33334 16.6667 1.33334C8.93467 1.33334 2.66666 7.60135 2.66666 15.3333C2.66666 17.5729 3.19253 19.6896 4.12751 21.5668C4.37598 22.0657 4.45868 22.6359 4.31463 23.1742L3.48078 26.2907C3.11879 27.6435 4.35648 28.8811 5.70935 28.5192L8.82581 27.6854C9.36417 27.5413 9.93436 27.6241 10.4332 27.8724C12.3104 28.8075 14.4271 29.3333 16.6667 29.3333Z"
        stroke={color}
        stroke-width="2"
      />
      <Path
        d="M10.6667 13.3333H22.6667"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M10.6667 18.6667H18.6667"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
}
