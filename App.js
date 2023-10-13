import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [minimum, setMinimum] = useState(-100)
  const [maximum, setMaximum] = useState(100)

  const plus = () => {
    setCounter((counter < maximum && counter + 1))
  }

  const minus = () => {
    setCounter(counter > minimum && counter - 1)
  }

  const reset = () => {
    setCounter(0)
    setMaximum(100)
    setMinimum(-100)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <Text style={{ color: "white", padding: 10, fontSize: 15 }}>Set minimum of counter </Text>
          <TextInput
            placeholder='-100'
            padding={10}
            backgroundColor={"white"}
            width={"20%"}
            height={35}
            onChangeText={setMinimum}


          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "white", padding: 10, fontSize: 15 }}>Set maximum of counter</Text>
          <TextInput
            placeholder='100'
            padding={10}
            backgroundColor={"white"}
            width={"20%"}
            height={35}
            onChangeText={setMaximum}
          />
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 150, color: 'white' }}>{counter}</Text>
      </View>

      <View>
        <Pressable
          onPress={reset}>
          <Text style={{ color: "white", fontSize: 30 }}>RESET</Text>
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={plus}
          disabled={counter == maximum}
        >
          <AntDesign name="pluscircleo" size={48} color="white" />
        </Pressable>
        <Pressable
          onPress={minus}
          disabled={counter == minimum}
        >
          <AntDesign name="minuscircleo" size={48} color="white" />
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: 'black'
  },
  textInputs: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: "70%",
    justifyContent: "space-between",

  }
});
