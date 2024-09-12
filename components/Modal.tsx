import { StyleSheet, Modal, Pressable } from 'react-native';
import React from 'react';

import { View } from './Themed';

import { useTheme } from '@/providers/ThemeProvider';

type ModalWindowProps = {
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
  children?: React.ReactNode;
};

export function ModalWindow(props: ModalWindowProps) {
  const { openModal, setOpenModal } = props;
  const theme = useTheme().theme;
  return (
    <View style={styles.container}>
      <Modal visible={openModal} statusBarTranslucent transparent animationType="fade">
        <Pressable
          onPress={() => setOpenModal(false)}
          style={[styles.content, { backgroundColor: theme.modal }]}
        >
          <View type="foreground" style={styles.card}>
            {props.children}
          </View>
        </Pressable>
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
  card: {
    width: '100%',
    padding: 32,
    borderRadius: 32,
    gap: 10,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
});
