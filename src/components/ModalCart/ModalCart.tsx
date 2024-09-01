import React from 'react';
import {Modal, ScrollView, StyleSheet} from 'react-native';

import {
  connectToDatabase,
  disconnectFromDatabase,
  dbUpdateItemColor,
} from '@database';
import {RootState, changeItemColor, hideModalCart} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, Button, Text, TouchableOpacityBox} from '@components';

export function ModalCart() {
  const dispatch = useDispatch();
  const isModalCartVisible = useSelector(
    (state: RootState) => state.utils.isModalCartVisible,
  );
  const itemId = useSelector((state: RootState) => state.item.itemId);
  const favoriteColors = useSelector(
    (state: RootState) => state.color.favoriteColors,
  );

  async function syncDatabase(id: string, name: string) {
    const db = await connectToDatabase();
    try {
      await dbUpdateItemColor(db, id, name);
    } finally {
      disconnectFromDatabase(db);
    }
  }

  const handleSetColorForItem = (id: string, colorName: string) => {
    dispatch(changeItemColor({id: id, color: colorName}));

    syncDatabase(id, colorName);

    dispatch(hideModalCart());
  };

  const handleCloseModalCart = () => {
    dispatch(hideModalCart());
  };

  const renderFavoriteColors = favoriteColors.map(color => (
    <TouchableOpacityBox
      key={color.name}
      onPress={() => handleSetColorForItem(itemId, color.name)}
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
      visible={isModalCartVisible}
      onRequestClose={handleCloseModalCart}>
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
              preset="primary"
              flexGrow={1}
              mt="s8"
              title="Sair"
              onPress={handleCloseModalCart}
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
