import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function DeleteIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.47058 6.01471V18.5294C5.47058 19.251 5.75721 19.943 6.26742 20.4532C6.77763 20.9634 7.46962 21.25 8.19117 21.25H15.8088C16.5304 21.25 17.2224 20.9634 17.7326 20.4532C18.2428 19.943 18.5294 19.251 18.5294 18.5294V6.01471"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.29413 6.01471H20.7059"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.73529 6.01471V4.38235C8.73529 3.94943 8.90727 3.53423 9.2134 3.2281C9.51952 2.92198 9.93472 2.75 10.3676 2.75H13.6323C14.0653 2.75 14.4805 2.92198 14.7866 3.2281C15.0927 3.53423 15.2647 3.94943 15.2647 4.38235V6.01471"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.82352 16.9915V11.5535"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1765 16.9915V11.5535"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
