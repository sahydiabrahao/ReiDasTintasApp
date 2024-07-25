import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box} from '@components';
import {useAppTheme} from '@hooks';
import {useAppSafeArea} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({children, scrollable = false}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();

  console.log({
    device: Platform.OS,
    bottom,
  });

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
