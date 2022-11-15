import React from "react";
import { Modal, View, Text, Button } from "react-native";
import {styles} from './styles'

const ModalList = ({modalVisible ,selectedTask, onHandleCancel, onHandleDelete  }) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Task Details</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailText}> Are you sure ti delete this item?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button
                    title='Cancel'
                    color={'#9A848F'}
                    onPress={onHandleCancel}
                    />
                    <Button
                    title='Delete'
                    color={'#9A848F'}
                    onPress={onHandleDelete}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalList