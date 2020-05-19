import React, { useState } from 'react';
import { Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const addGoalHandler = (enteredGoal) => {
    if(enteredGoal.length === 0){
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setModalStatus( !modalStatus);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL"  onPress={() => setModalStatus( !modalStatus)}/>
      <GoalInput onButtonPress={addGoalHandler} onCancelPress={() => setModalStatus(false)} modalStatus={modalStatus} />
      <FlatList
        data={courseGoals}
        KeyExtractor={(item) => item.id}
        renderItem={itemData => (
          <GoalItem value={itemData.item.value}  id={itemData.item.id} onDelete={removeGoalHandler} />
        )
        } />
    </View>
  );
}
