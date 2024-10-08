import React from 'react';

import {
  HomeIcon,
  CartIcon,
  ContactIcon,
  LogoIcon,
  SearchIcon,
  MenuIcon,
  SettingsIcon,
  PlusIcon,
  MinusIcon,
  DeleteIcon,
  ColorIcon,
  SuccessIcon,
  ErrorIcon,
  CrownIcon,
} from '@assets';
import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface iconBase {
  size?: number;
  color?: string;
}

//Choose properts Pick<IconProps,"name"|"color"
//Omit properts Omit<IconProps,"name"|"color"
export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}
export function Icon({name, color = 'backgroundContrast', size}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  home: HomeIcon,
  cart: CartIcon,
  contact: ContactIcon,
  search: SearchIcon,
  color: ColorIcon,
  settings: SettingsIcon,

  crown: CrownIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  delete: DeleteIcon,
  success: SuccessIcon,
  error: ErrorIcon,

  menu: MenuIcon,
  logo: LogoIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
