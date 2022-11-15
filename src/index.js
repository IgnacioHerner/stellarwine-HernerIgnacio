import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AddItem, TaskItem, ListItem, ModalList } from './components/index'

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState ([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState (null);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('')
  }

  const onHandleSelected = (item) =>{
    setSelectedTask(item);
    setModalVisible(true);
  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected}/>
  )

  const onHandleCancel = () =>{
    setModalVisible(!modalVisible);
  }

  const onHandleDelete = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible);
  }

  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem  task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange}/>
      <View style ={styles.listContainer}>
        <Text style={styles.listTitle}> Todo List</Text>
      </View>
      <ListItem renderItem={renderItem} taskList={taskList}/>
      <ModalList modalVisible={modalVisible} selectedTask={selectedTask} onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete}/>
    </View>
  );
}
