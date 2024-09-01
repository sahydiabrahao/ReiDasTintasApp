import React from 'react';
import {ImageBackground} from 'react-native';

import {ColorsPalette} from '@assets';
import {Box, Text} from '@components';
import {$shadowProps} from '@theme';

export function CardOffer() {
  return (
    <ImageBackground
      source={{uri: ColorsPalette}}
      style={{
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 1,
        ...$shadowProps,
        marginBottom: 12,
      }}
      resizeMode="cover">
      <Box
        flexGrow={1}
        height={150}
        alignItems="flex-start"
        justifyContent="flex-start"
        paddingHorizontal="s8"
        paddingVertical="s8">
        <Text bold preset="paragraphMedium" color="grayWhite">
          Transforme seu ambiente
        </Text>
        <Text preset="paragraphCaptionSmall" color="grayWhite">
          com mais de 3000 opções de cores.
        </Text>
      </Box>
    </ImageBackground>
  );
}
