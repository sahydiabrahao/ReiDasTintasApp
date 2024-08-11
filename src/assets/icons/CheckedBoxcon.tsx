import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function CheckedBoxIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.39258 12.084L9.98594 14.6774C10.0772 14.7697 10.1858 14.843 10.3056 14.8931C10.4253 14.9431 10.5539 14.9689 10.6837 14.9689C10.8134 14.9689 10.942 14.9431 11.0617 14.8931C11.1815 14.843 11.2901 14.7697 11.3814 14.6774L16.6076 9.45117"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
