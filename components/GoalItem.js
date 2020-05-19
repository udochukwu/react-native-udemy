import React, { } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'
const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.8}>
            <View style={styles.listItem}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;