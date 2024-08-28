import React, {useEffect} from 'react';
import {Modal, ScrollView, StyleSheet} from 'react-native';

import {connectToDatabase, setColorForItem} from '@database';
import {closeModalCart, RootState, updateItemColor} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, Text, TouchableOpacityBox} from '@components';

export function ModalCart() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.item.isVisible);
  const itemId = useSelector((state: RootState) => state.item.itemId);
  const listFavoriteColors = useSelector(
    (state: RootState) => state.color.favoriteColors,
  );

  const handleClose = () => {
    dispatch(closeModalCart());
  };

  const setColor = (id: string, colorName: string) => {
    dispatch(updateItemColor({id, color: colorName}));
    dispatch(closeModalCart());
    updateColorIntoDB(id, colorName);
  };

  async function updateColorIntoDB(id: string, name: string) {
    try {
      const db = await connectToDatabase();
      await setColorForItem(db, id, name);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {}, []);

  const renderFavoriteColors = listFavoriteColors.map(color => (
    <TouchableOpacityBox
      key={color.name}
      onPress={() => setColor(itemId, color.name)}
      flexDirection="row"
      gap="s8">
      <Box
        mb="s12"
        width={150}
        height={64}
        padding="s4"
        alignItems="flex-start"
        justifyContent="flex-end"
        style={{
          borderTopLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: color.hexValue,
        }}>
        <Text
          preset="paragraphCaption"
          style={{
            color: color.contrastColor,
          }}>
          {color.name}
        </Text>
      </Box>
    </TouchableOpacityBox>
  ));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}>
      <Box style={styles.modalBackground}>
        <Box style={styles.modalContent}>
          <Box style={[styles.modalColor]} />
          <Text preset="paragraphMedium" mb="s24">
            Selecione uma cor!
          </Text>
          <ScrollView
            style={{maxHeight: 320}}
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            {renderFavoriteColors}
          </ScrollView>
          <Box
            columnGap="s8"
            flexDirection="row"
            justifyContent="space-between">
            <Button
              preset="outiline"
              flexGrow={1}
              mt="s8"
              title="Sair"
              onPress={handleClose}
              backgroundColor="grayWhite"
              borderColor="bluePrimary"
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalColor: {
    borderRadius: 10,
    alignItems: 'center',
  },
});
