import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import {Pressable, StatusBar, StyleSheet, Text, TextInput, View,Button,SafeAreaView} from "react-native";

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [number, onChangeNumber] = useState('');
    
    return (


<View style={styles.container}>
        
<Button
onPress={() => dispatch(increment()) }

title="+"
color="#841584"
/>
<Text> {count}</Text>
<Button
onPress={() => dispatch(decrement()) }

title="-"
color="#841584"
/>
<SafeAreaView>
<TextInput
 style={styles.input}
 onChangeText={onChangeNumber}
 value={number}
 placeholder="useless placeholder"
 keyboardType="numeric"
/>
</SafeAreaView>
<Button
onPress={() => openModal(i) }

title="add"
color="#841584"
/>
</View>    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
})