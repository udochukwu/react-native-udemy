import React, { useState } from 'react';
import { TextInput, View, Button, Modal } from 'react-native';
import styles from '../styles';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onButtonPress(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.modalStatus} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Course Goal"}
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.inputButtonsView}>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancelPress} /></View>
                    <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;