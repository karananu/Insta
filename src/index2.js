import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'

function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [heigt, setHeight] = useState('')
  const [bmi, setbmi] = useState('')
  const [description, setdescription] = useState()
  const calculatorBmi = () => {
    const bmi = weight / ((heigt / 100) * (heigt / 100))
    setbmi(bmi.toFixed(1))

    if (bmi < 18.5) {
      setdescription('Underweight', 'eat more')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setdescription('Normal', 'keep it up')
    } else if (bmi >= 25 && bmi <= 29.9) {
      setdescription('Overweight', 'start working out')
    } else if (bmi >= 30) {
      setdescription('Obese', 'Hit the gym')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BMI Calculator</Text>
      </View>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight in Kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={heigt}
        onChangeText={(text) => setHeight(text)}
        placeholder="Height in Kg"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculatorBmi}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{description}</Text>
      </View>
    </View>
  )
}

export default BmiCalculator
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0ecde',
  },
  title: {
    backgroundColor: '#2c6975',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#cde0c9',
    fontSize: 18,
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#68b2a0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultView: {
    margin: 15,
  },
  result: {
    fontSize: 30,
    color: '#2c6975',
    fontWeight: 'bold',
  },
})
