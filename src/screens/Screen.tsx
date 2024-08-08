import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps, HeaderScreen} from '@components';
import {useAppTheme} from '@hooks';
import {useAppSafeArea} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <HeaderScreen />
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s8"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
