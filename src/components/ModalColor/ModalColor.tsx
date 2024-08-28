import React, {useEffect, useState} from 'react';
import {Modal, Pressable, StyleSheet} from 'react-native';

import {deleteFavoriteColors, storeFavoriteColors} from '@database';
import {Color} from '@domain';
import {
  closeModal,
  pushFavoriteColors,
  removeColorByName,
  RootState,
} from '@redux';
import {useToast} from '@services';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, Text} from '@components';

interface Props {
  color: Color;
}

export function ModalColor({color}: Props) {
  const dispatch = useDispatch();
  const {showToast} = useToast();
  const isVisible = useSelector((state: RootState) => state.color.isVisible);
  const [deletedColorNames, setDeletedColorNames] = useState<string[]>([]);
  const listFavoriteColors = useSelector(
    (state: RootState) => state.color.favoriteColors,
  );

  const handleClose = () => {
    dispatch(closeModal());
  };

  const addToFavorites = (selectedColor: Color) => {
    dispatch(pushFavoriteColors(selectedColor));
    dispatch(closeModal());
    showToast({
      message: 'Cor favoritada!',
      position: 'bottom',
      type: 'success',
    });
  };
  const removeFromFavorites = (selectedColor: string) => {
    dispatch(removeColorByName(selectedColor));
    dispatch(closeModal());
    setDeletedColorNames(prev => [...prev, selectedColor]);

    showToast({
      message: 'Cor desfavoritada!',
      position: 'bottom',
      type: 'success',
    });
  };

  useEffect(() => {
    storeFavoriteColors(listFavoriteColors);
    if (deletedColorNames.length > 0) {
      deleteFavoriteColors(deletedColorNames);
      setDeletedColorNames([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFavoriteColors]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}>
      <Box style={styles.modalBackground}>
        <Box style={styles.modalContent}>
          <Pressable onPress={() => removeFromFavorites(color.name)}>
            <Text preset="paragraphCaption" color="error" mb="s12">
              Desfavoritar
            </Text>
          </Pressable>

          <Box style={[styles.modalColor, {backgroundColor: color.hexValue}]} />
          <Text preset="paragraphMedium" mb="s12">
            {color.name}
          </Text>
          <Text preset="paragraphMedium" mb="s24">
            Incluir nos favoritos?
          </Text>
          <Box
            columnGap="s8"
            flexDirection="row"
            justifyContent="space-between">
            <Button
              preset="outiline"
              flexGrow={1}
              title="Não"
              onPress={handleClose}
              backgroundColor="grayWhite"
              borderColor="bluePrimary"
            />
            <Button
              preset="primary"
              flexGrow={1}
              title="Sim"
              onPress={() => addToFavorites(color)}
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
    width: 150,
    padding: 100,

    borderRadius: 10,
    alignItems: 'center',
  },
});
