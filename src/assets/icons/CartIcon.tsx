import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function CartIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.53657 21.25H7.54758"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9381 21.25H17.9491"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.62838 6.52571H9.60334C12.3104 6.52571 15.0175 6.52571 17.7246 6.52571C18.2498 6.50271 18.7743 6.58341 19.2682 6.76318C19.5116 6.85995 19.73 7.01065 19.9069 7.20397C20.0837 7.39727 20.2145 7.62817 20.2893 7.87927C20.3493 8.45024 20.2761 9.02733 20.0756 9.56528C19.9449 10.1351 19.8263 10.7526 19.7075 11.275C19.4462 12.4624 19.1851 13.6497 18.9714 14.8371C18.9205 15.4101 18.7016 15.9553 18.3421 16.4043C18.1157 16.6114 17.8494 16.7699 17.5594 16.8699C17.2693 16.9699 16.962 17.0095 16.6561 16.986C15.6349 16.986 14.602 16.986 13.569 16.986H9.80509C9.25234 17.0394 8.69568 17.0394 8.14288 16.986C7.8537 16.9546 7.5781 16.8469 7.34439 16.6736C7.11069 16.5004 6.9273 16.2681 6.81307 16.0006C6.61691 15.3381 6.46226 14.6639 6.35001 13.9822C6.25503 13.4478 6.13629 12.9136 6.01756 12.3793C5.60199 10.3964 5.12706 8.43731 4.62838 6.52571ZM4.62838 6.52571C4.31967 5.26714 3.9991 4.00857 3.69039 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5531 11.9993H5.93447"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
