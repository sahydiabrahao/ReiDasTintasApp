import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function ColorIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.88 21.25H18.75C19.413 21.25 20.0489 20.9866 20.5178 20.5178C20.9866 20.0489 21.25 19.413 21.25 18.75V15.12C21.2447 14.4604 20.979 13.8297 20.5107 13.3651C20.0425 12.9006 19.4096 12.64 18.75 12.64H17.48"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.38 18.73L17.48 12.62L19.35 10.75C19.5825 10.5186 19.767 10.2436 19.8929 9.9407C20.0188 9.6378 20.0836 9.31302 20.0836 8.985C20.0836 8.65698 20.0188 8.3322 19.8929 8.0293C19.767 7.72641 19.5825 7.45138 19.35 7.22L16.78 4.65C16.5486 4.41749 16.2736 4.23299 15.9707 4.10709C15.6678 3.98119 15.343 3.91638 15.015 3.91638C14.687 3.91638 14.3622 3.98119 14.0593 4.10709C13.7564 4.23299 13.4814 4.41749 13.25 4.65L11.38 6.52"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.88 2.75H5.25C3.86929 2.75 2.75 3.86929 2.75 5.25V18.75C2.75 20.1307 3.86929 21.25 5.25 21.25H8.88C10.2607 21.25 11.38 20.1307 11.38 18.75V5.25C11.38 3.86929 10.2607 2.75 8.88 2.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.06501 18.5936C7.94512 18.5936 8.65859 17.8801 8.65859 17C8.65859 16.1199 7.94512 15.4064 7.06501 15.4064C6.18489 15.4064 5.47142 16.1199 5.47142 17C5.47142 17.8801 6.18489 18.5936 7.06501 18.5936Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
