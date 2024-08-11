import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function UnCheckedBoxIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.25 2.75H8.75C5.43629 2.75 2.75 5.43629 2.75 8.75V15.25C2.75 18.5637 5.43629 21.25 8.75 21.25H15.25C18.5637 21.25 21.25 18.5637 21.25 15.25V8.75C21.25 5.43629 18.5637 2.75 15.25 2.75Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </Svg>
  );
}
