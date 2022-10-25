import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Radiobutton from './components/Radiobutton';
import { useState } from 'react';

export default function App() {
//määritellään taulukko/data ja sitten siirretään propsilla radiobutton.js

const [choice, setChoice] = useState()
  const options =[
    {label: 'Woman', value: 1},
    {label: 'Men', value: 2},
    {label: 'other', value: 3},
  ]

  return (
    <View style={styles.container}>
      <Radiobutton 
      options={options} 
      onPress={(value)=> {setChoice(value)}} initialValue={1}  />
      <Text>{choice}</Text>
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
});
