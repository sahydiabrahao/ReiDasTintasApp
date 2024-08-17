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
  UpIcon,
  DownIcon,
  DeleteIcon,
  EditIcon,
  DeliveryIcon,
  CheckedBoxIcon,
  UnCheckedBoxIcon,
  WallIcon,
  WoodIcon,
  MetalIcon,
  FloorIcon,
  SprayIcon,
  SealerIcon,
  PuttyIcon,
  TextureIcon,
  EffectIcon,
  SolventIcon,
  PaintForkIcon,
  ProtectionIcon,
  SandPapperIcon,
  PaintBrushIcon,
  SpatulaIcon,
  TrowelIcon,
  PaintRollIcon,
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
  settings: SettingsIcon,

  search: SearchIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  up: UpIcon,
  down: DownIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  delivery: DeliveryIcon,
  checkedBox: CheckedBoxIcon,
  unCheckedBox: UnCheckedBoxIcon,

  wall: WallIcon,
  wood: WoodIcon,
  metal: MetalIcon,
  floor: FloorIcon,
  spray: SprayIcon,
  sealer: SealerIcon,
  putty: PuttyIcon,
  texture: TextureIcon,
  effect: EffectIcon,
  solvent: SolventIcon,
  paintFork: PaintForkIcon,
  protection: ProtectionIcon,
  sandPapper: SandPapperIcon,
  paintBrush: PaintBrushIcon,
  spatula: SpatulaIcon,
  trowel: TrowelIcon,
  paintRoll: PaintRollIcon,

  menu: MenuIcon,
  logo: LogoIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
