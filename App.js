import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

const [text, setText] = useState();
const [data, setData] = useState([]);

const addPressed = () => {
  setData([...data, {key:text }]);
  setText('');
}

const clearPressed = () => {
  setData([])
}

  return (
    <View style={styles.container}>
       <View style={styles.inputContainer}> 
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
       value={text} 
       onChangeText={text => setText(text)} />
       </View>
       <View style={styles.buttonContainer}>
      <Button title="add"
      onPress={addPressed} />
      <Button title="clear"
      onPress={clearPressed} />
     </View>
     <View style={styles.listContainer}> 
     <Text style={{color:'blue', fontWeight:'bold'}} >Shopping list</Text>
     <FlatList
     data ={data} 
     renderItem={({item}) =>
     <Text>{item.key}</Text>}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    width: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 4,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
