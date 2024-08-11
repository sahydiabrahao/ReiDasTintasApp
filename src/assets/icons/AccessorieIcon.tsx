import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function AcessorieIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.40454 22.2326C9.40454 23.2089 10.196 24 11.1719 24H11.2899C12.2658 24 13.0573 23.2089 13.0573 22.2326V15.868H9.40454V22.2326Z"
        fill={color}
      />
      <Path
        d="M20.6912 3.08958L20.6899 3.08588H20.0712V2.04281C20.0705 0.914438 19.1568 0.000703125 18.0284 0H4.04277C2.91444 0.000703125 2.00066 0.914438 2 2.04281V5.71463C2.00066 6.843 2.91444 7.75673 4.04277 7.75739H18.0284C19.1568 7.75673 20.0705 6.843 20.0712 5.71463V4.5682H20.3987C20.5595 4.5682 20.6898 4.69852 20.6898 4.8593V5.22525V7.38567C20.6898 7.78711 20.4451 8.14936 20.0718 8.29945L20.0508 8.3078L12.0264 12.1648L12.0274 12.1665C11.1594 12.5351 10.5919 13.3847 10.5919 14.3309V15.0692H11.9608V14.3309C11.9608 13.9285 12.2052 13.5668 12.5785 13.4168L12.5998 13.4081L20.6236 9.55148L20.6226 9.5498C21.4912 9.18117 22.0588 8.33156 22.0588 7.38572V4.51941C22.0585 3.57155 21.5909 3.09023 20.6912 3.08958ZM18.7022 5.71458C18.7019 5.90241 18.628 6.06684 18.5046 6.19083C18.3807 6.31411 18.2165 6.38803 18.0284 6.38836H4.04277C3.85461 6.38803 3.69045 6.31416 3.56647 6.19083C3.44319 6.06684 3.36931 5.90236 3.36894 5.71458V2.04281C3.36931 1.85466 3.44314 1.69055 3.56647 1.56619C3.69045 1.44319 3.85456 1.36931 4.04277 1.36898H18.0284C18.2165 1.36936 18.3807 1.44319 18.5046 1.56619C18.628 1.6905 18.7018 1.85466 18.7022 2.04281V5.71458Z"
        fill={color}
      />
    </Svg>
  );
}
