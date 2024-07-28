import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function CartIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M14.6667 28C14.6667 27.264 14.3667 26.596 13.8853 26.1147C13.404 25.6333 12.736 25.3333 12 25.3333C11.264 25.3333 10.596 25.6333 10.1147 26.1147C9.63333 26.596 9.33333 27.264 9.33333 28C9.33333 28.736 9.63333 29.404 10.1147 29.8853C10.596 30.3667 11.264 30.6667 12 30.6667C12.736 30.6667 13.404 30.3667 13.8853 29.8853C14.3667 29.404 14.6667 28.736 14.6667 28ZM29.3333 28C29.3333 27.264 29.0333 26.596 28.552 26.1147C28.0707 25.6333 27.4027 25.3333 26.6667 25.3333C25.9307 25.3333 25.2627 25.6333 24.7813 26.1147C24.3 26.596 24 27.264 24 28C24 28.736 24.3 29.404 24.7813 29.8853C25.2627 30.3667 25.9307 30.6667 26.6667 30.6667C27.4027 30.6667 28.0707 30.3667 28.552 29.8853C29.0333 29.404 29.3333 28.736 29.3333 28ZM9.628 9.33333H29.0547L27.2267 18.9213C27.1653 19.2253 27.0053 19.488 26.784 19.6787C26.544 19.8867 26.2333 20.0067 25.8667 20H12.888C12.5787 20.004 12.2867 19.9053 12.0533 19.7293C11.8 19.5387 11.6147 19.2613 11.548 18.9253L9.628 9.33333ZM1.33333 2.66667H5.57333L6.704 8.31867C6.848 8.90133 7.37333 9.33333 8 9.33333H9.628L9.09467 6.66667H8C7.264 6.66667 6.66667 7.264 6.66667 8C6.66667 8.07067 6.672 8.14 6.68267 8.20667C6.688 8.244 6.69467 8.28267 6.704 8.31867L8.93333 19.448C9.132 20.4493 9.69333 21.292 10.4533 21.8627C11.148 22.3853 12.0133 22.68 12.9253 22.6667H25.8667C26.864 22.6867 27.8067 22.3187 28.5267 21.6973C29.1853 21.1293 29.6573 20.3467 29.84 19.4533L31.976 8.25067C32.1133 7.52667 31.64 6.82933 30.916 6.69067C30.8293 6.67333 30.7427 6.66533 30.6667 6.66667H9.09467L7.97333 1.072C7.848 0.456 7.31067 0 6.66667 0H1.33333C0.597333 0 0 0.597333 0 1.33333C0 2.06933 0.597333 2.66667 1.33333 2.66667Z"
        fill={color}
      />
    </Svg>
  );
}
