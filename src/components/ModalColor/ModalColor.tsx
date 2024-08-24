import React from 'react';
import {Modal, StyleSheet} from 'react-native';

import {Color} from '@domain';
import {closeModal, favoriteColors, RootState} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, Text} from '@components';

interface Props {
  color: Color;
}

export function ModalColor({color}: Props) {
  const dispatch = useDispatch();

  const isVisible = useSelector((state: RootState) => state.color.isVisible);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const addToFavorites = (selectedColor: Color) => {
    dispatch(favoriteColors(selectedColor));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}>
      <Box style={styles.modalBackground}>
        <Box style={styles.modalContent}>
          <Box style={[styles.modalColor, {backgroundColor: color.color}]} />
          <Text style={styles.modalText}>{color.name}</Text>
          <Text style={styles.modalText}>Incluir nos favoritos?</Text>
          <Box
            columnGap="s8"
            flexDirection="row"
            justifyContent="space-between">
            <Button flexGrow={1} title="Não" onPress={handleClose} />
            <Button
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
