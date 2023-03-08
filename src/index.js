import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'
function LoveCalculator() {
  const [maleName, setMaleName] = useState('')
  const [femaleName, setFemaleName] = useState('')
  const [loading, setLoading] = useState(false)
  const [lovePercentage, setLoverPercentage] = useState([])
  const calculateLove = () => {
    const API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${femaleName}&fname='${maleName}`
    setLoading(true)
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0c9c6525d1msh6a6ae5cf59c4fbap1f742ajsn19cdeddbc79f',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        console.log(data)
        setLoverPercentage(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Love Calculator</Text>T
      </View>
      <TextInput
        placeholder="Male Name"
        value={maleName}
        onChangeText={(text) => setMaleName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Female Name"
        value={femaleName}
        onChangeText={(text) => setFemaleName(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={calculateLove}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.box}>
        <Text style={styles.result1}>{lovePercentage.percentage} </Text>
      </View>
      <View style={styles.conclusion}>
        <Text style={styles.result}>{lovePercentage.result}</Text>
      </View>
    </View>
  )
}

export default LoveCalculator
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBFA9',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    height: 80,
    width: '100%',
    backgroundColor: '#0a1d37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 15,
    fontSize: 18,
    backgroundColor: '#ffbd9b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#ffd8cc',
    alignItem: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingleft: 20,
    borderRadius: 50,
  },
  result1: {
    paddingLeft: 35,
    fontSize: 30,
    fontWeight: 'bold',
  },
  conclusion: {
    paddingLeft: 20,
  },
})
