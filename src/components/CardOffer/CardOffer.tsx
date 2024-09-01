import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';

import {Offer} from '@domain';

import {Box, Text} from '@components';
import {$shadowProps, $textShadowProps} from '@theme';

type Props = {
  offer: Offer;
};

export function CardOffer({offer}: Props) {
  const {width} = Dimensions.get('window');
  return (
    <ImageBackground
      source={{uri: offer.image}}
      style={{
        flexGrow: 1,
        flexDirection: 'row',
        ...$shadowProps,
        marginBottom: 12,
        width: width,
        height: 150,
      }}
      resizeMode="cover">
      <Box
        width={width}
        alignItems="flex-start"
        justifyContent="flex-start"
        paddingHorizontal="s16"
        paddingVertical="s2">
        <Text
          style={$textShadowProps}
          bold
          preset="paragraphMedium"
          color="grayWhite">
          {offer.title}
        </Text>
        <Text
          style={$textShadowProps}
          preset="paragraphCaptionSmall"
          color="grayWhite">
          {offer.subTitle}
        </Text>
        <Box
          position="absolute"
          left={'45%'}
          bottom={4}
          flexDirection="row"
          gap="s8">
          <Box
            backgroundColor={offer.id === 'OFF0000' ? 'bluePrimary' : 'gray5'}
            width={8}
            height={8}
            borderRadius="s16"
          />
          <Box
            backgroundColor={offer.id === 'OFF0001' ? 'bluePrimary' : 'gray5'}
            width={8}
            height={8}
            borderRadius="s16"
          />
          <Box
            backgroundColor={offer.id === 'OFF0002' ? 'bluePrimary' : 'gray5'}
            width={8}
            height={8}
            borderRadius="s16"
          />
        </Box>
      </Box>
    </ImageBackground>
  );
}
