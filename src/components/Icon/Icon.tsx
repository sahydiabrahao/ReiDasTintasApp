import React from 'react';

import {HomeIcon} from '@assets';

interface Props {
  name: IconName;
}
export function Icon({name}: Props) {
  const SVGIcon = iconRegistry[name];
  return <SVGIcon />;
}

const iconRegistry = {
  home: HomeIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
