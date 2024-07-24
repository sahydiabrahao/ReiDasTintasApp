import React from 'react';

import {HomeIcon, CartIcon, ContactIcon} from '@assets';
import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface iconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}
export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  home: HomeIcon,
  cart: CartIcon,
  contact: ContactIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
