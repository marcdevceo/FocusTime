import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from "../utils/colors";
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  console.log(subject)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style = {styles.textInput}
          label = "What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style = {styles.button}>
        <RoundedButton         
          title = "+"
          size={50}
          onPress={() => addSubject(subject)}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center', 
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
})