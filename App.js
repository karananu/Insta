import { StyleSheet, View } from 'react-native'
// import LoveCalculator from './src'
import BmiCalculator from './src/index2'
function App() {
  return (
    <View style={styles.container}>
      {/* <LoveCalculator /> */}
      <BmiCalculator />
    </View>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
