import { StyleSheet, Modal } from 'react-native';
import React from 'react';

import { View } from './Themed';

type ModalWindowProps = {
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
  children?: React.ReactNode;
};

export function ModalWindow(props: ModalWindowProps) {
  const { openModal, setOpenModal } = props;
  return (
    <View style={styles.container}>
      <Modal visible={openModal} statusBarTranslucent transparent animationType="fade">
        {props.children}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
