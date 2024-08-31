import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {
  beigesAnBrownsMock,
  blueGreensMock,
  bluesMock,
  graysMock,
  greensMock,
  orangesMock,
  redAndPinksMock,
  violetsMock,
  yellowGreensMock,
  yellowsMock,
} from '@domain';
import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {GridColor, ModalColor, Text} from '@components';
import {Screen} from '@screens';

export function ColorScreen() {
  const color = useSelector((state: RootState) => state.color.favoriteColor);

  const favoriteColors = useSelector(
    (state: RootState) => state.color.favoriteColors,
  );

  const colorGroups = [
    {title: 'Amarelos', colors: yellowsMock},
    {title: 'Amarelos Esverdeados', colors: yellowGreensMock},
    {title: 'Violetas', colors: violetsMock},
    {title: 'Vermelhos e Rosas', colors: redAndPinksMock},
    {title: 'Laranjas', colors: orangesMock},
    {title: 'Verdes', colors: greensMock},
    {title: 'Cinzas', colors: graysMock},
    {title: 'Azuis', colors: bluesMock},
    {title: 'Azuis Esverdeados', colors: blueGreensMock},
    {title: 'Beiges e Marrons', colors: beigesAnBrownsMock},
  ];

  // Define o número de grupos de cores a serem exibidos inicialmente
  const [visibleGroups, setVisibleGroups] = useState(4);

  // Função para carregar mais grupos de cores quando o botão "Carregar mais" é pressionado
  const loadMoreGroups = () => {
    setVisibleGroups(prev => Math.min(prev + 4, colorGroups.length));
  };

  return (
    <Screen scrollable>
      {favoriteColors.length > 0 && (
        <GridColor title="Favoritas" colors={favoriteColors} />
      )}
      <ScrollView>
        {/* Renderiza apenas os grupos de cores visíveis atualmente */}
        {colorGroups.slice(0, visibleGroups).map(group => (
          <GridColor
            key={group.title}
            title={group.title}
            colors={group.colors}
          />
        ))}
        {/* Exibe o botão "Carregar mais" se houver mais grupos de cores para carregar */}
        {visibleGroups < colorGroups.length && (
          <View>
            <Text
              color="gray3"
              preset="paragraphSmall"
              onPress={loadMoreGroups}
              style={{textAlign: 'center', padding: 10}}>
              Carregar mais
            </Text>
          </View>
        )}
      </ScrollView>
      <ModalColor color={color} />
    </Screen>
  );
}
