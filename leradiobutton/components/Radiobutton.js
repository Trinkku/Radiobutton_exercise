import { useState } from 'react'
import { View, Text } from 'react-native'
import {React, useState} from 'react'


/**
 * Componens displays radiobutton.
 * @param options Array containing displayed texts and values for radiobutton
 * @param onPress Used to forward selected value to the component using this radiobutton component --> (you need to be able to read radiobutton selection)
 */
export default function Radiobutton({options, onPress}) {
//State variable for value of the radiobutton
const [value, setValue] = useState(null)

/**
 * Function for handling radiobutton selection. State variable is updated and selection is forwarded
 * the component that is using this Rafdiobutton component using onPress as props.
 * @param selected Value of the radiobutton.
 */
function handlePress(selected){
    setValue(selected);
    onPress(selected)
}
  return (
    <View>
      <Text>Radiobutton</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    buttoncontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginbottom:30,
    },
    label: {
        marginRight:10,
    },
    circle: {
        height: 28,
        width:28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    }
  });
  