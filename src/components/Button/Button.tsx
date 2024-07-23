import React from 'react';

import {TouchableOpacityBox, TouchableOpacityBoxProps, Text} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s12"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      <Text
        preset="paragraphMedium"
        bold
        color={buttonPreset.content.color}
        {...buttonPreset.content.textProps}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
