import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {iconBase} from '@components';

export function MetalIcon({size = 20, color = 'black'}: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.7604 9.20008C16.7604 10.234 17.6016 11.0752 18.6355 11.0752C19.6694 11.0752 20.5106 10.234 20.5106 9.20008C20.5106 8.40358 20.0111 7.72187 19.3091 7.45061V5.87443C19.3091 5.50248 19.0075 5.20089 18.6356 5.20089H15.4354L15.2458 3.86795H15.3889C15.7608 3.86795 16.0624 3.5663 16.0624 3.1944V0.673548C16.0623 0.301641 15.7607 0 15.3888 0H8.12181C7.74985 0 7.44826 0.301641 7.44826 0.673548V3.1944C7.44826 3.56635 7.7499 3.86795 8.12181 3.86795H8.26501L8.07554 5.20089H4.87505C4.5031 5.20089 4.2015 5.50253 4.2015 5.87443V7.45061C3.4995 7.72187 3 8.40349 3 9.20008C3 10.234 3.84117 11.0752 4.8751 11.0752C5.90902 11.0752 6.7502 10.234 6.7502 9.20008C6.7502 8.40358 6.25069 7.72187 5.54869 7.45061V6.54803H7.88424L6.03962 19.5263H4.88433C4.51238 19.5263 4.21078 19.828 4.21078 20.1999V23.3265C4.21078 23.6984 4.51242 24 4.88433 24H18.6265C18.9985 24 19.3001 23.6984 19.3001 23.3265V20.1999C19.3001 19.8279 18.9984 19.5263 18.6265 19.5263H17.1545L12.7357 15.3481L15.9169 12.6208C16.1873 12.3653 16.1992 11.939 15.9436 11.6687C15.688 11.3981 15.2617 11.3863 14.9914 11.642L11.7554 14.4212L9.52848 12.3155L15.2701 12.3422C15.642 12.3422 15.9436 12.0406 15.9436 11.6687C15.9436 11.2967 15.642 10.9951 15.2701 10.9951L8.61667 10.9684L8.75725 9.97929L11.7554 7.14437L14.755 9.98069L16.5568 19.7162C16.6091 20.0845 16.9502 20.34 17.3186 20.2881C17.6869 20.2357 17.943 19.8946 17.8905 19.5263L15.6272 6.54812H17.962V7.4507C17.2599 7.72187 16.7604 8.40353 16.7604 9.20008ZM4.87505 9.72804C4.58396 9.72804 4.3471 9.49122 4.3471 9.20008C4.3471 8.90899 4.58391 8.67213 4.87505 8.67213C5.16619 8.67213 5.403 8.90894 5.403 9.20008C5.403 9.49122 5.16619 9.72804 4.87505 9.72804ZM13.2595 3.86799L11.7552 5.29032L10.251 3.86799H13.2595ZM8.7954 1.34714H14.7152V2.52085H8.7954V1.34714ZM17.9528 22.6529H5.55779V20.8735H6.6241L6.62504 20.8735L6.62644 20.8735H17.9528V22.6529ZM15.1937 19.5263H8.31681L11.7552 16.275L15.1937 19.5263ZM7.56235 18.3858L8.32356 13.0301L10.7749 15.348L7.56235 18.3858ZM9.06156 7.83738L9.4675 4.98104L10.7749 6.21732L9.06156 7.83738ZM12.7356 6.21728L14.0433 4.98076L14.45 7.83836L12.7356 6.21728ZM18.6355 9.72804C18.3444 9.72804 18.1076 9.49122 18.1076 9.20008C18.1076 8.90899 18.3444 8.67213 18.6355 8.67213C18.9267 8.67213 19.1635 8.90894 19.1635 9.20008C19.1634 9.49122 18.9266 9.72804 18.6355 9.72804Z"
        fill={color}
      />
    </Svg>
  );
}
