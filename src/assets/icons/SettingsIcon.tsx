import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function SettingsIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.132 15.4039C13.9898 15.4039 15.4958 13.8979 15.4958 12.0402C15.4958 10.1824 13.9898 8.67642 12.132 8.67642C10.2743 8.67642 8.76828 10.1824 8.76828 12.0402C8.76828 13.8979 10.2743 15.4039 12.132 15.4039Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9834 15.094C20.5864 16.2329 19.9745 17.2853 19.181 18.1937L17.0571 17.7115C16.2517 18.4346 15.2945 18.9681 14.2559 19.2727L13.6819 21.3507C13.1438 21.4475 12.5983 21.4974 12.0517 21.5C11.3679 21.4999 10.6862 21.4228 10.0197 21.2703L9.41117 19.1236C8.50337 18.7897 7.66902 18.2828 6.95437 17.631L4.85347 18.1706C4.01977 17.1983 3.39458 16.0651 3.01662 14.8414L4.56646 13.1194C4.50763 12.7395 4.47692 12.3557 4.47462 11.9712C4.47515 11.4657 4.52902 10.9617 4.63535 10.4674L3.10846 8.87159C3.55167 7.62023 4.25608 6.4775 5.17493 5.51933L7.34471 6.05891C7.94202 5.57995 8.60757 5.19299 9.31932 4.91088L9.89335 2.78701C10.602 2.60229 11.3308 2.50589 12.0631 2.5C12.6484 2.50063 13.2325 2.55443 13.8081 2.66073L14.3592 4.77311C15.1898 5.04156 15.9668 5.45343 16.6553 5.99003L18.8365 5.42749C19.7177 6.31405 20.4124 7.36797 20.88 8.52718L19.3991 10.1344C19.6798 11.2356 19.7034 12.3865 19.4679 13.4982L20.9834 15.094Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
