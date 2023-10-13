import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function App() {

  const [value, setValue] = useState(0)
  const [minimum, setMinimum] = useState(-100)
  const [maximum, setMaximum] = useState(100)

  const plus = () => {
    setValue((value < maximum && value + 1))
  }

  const minus = () => {
    setValue(value > minimum && value - 1)
  }



  const reset = () => {
    setValue(0)
  }

  return (
    <View style={styles.container}>
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
        <Text style={{ fontSize: 150, color: 'white' }}>{value}</Text>
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
          disabled={value == maximum}
        >
          <AntDesign name="pluscircleo" size={48} color="white" />
        </Pressable>
        <Pressable
          onPress={minus}
          disabled={value == minimum}
        >
          <AntDesign name="minuscircleo" size={48} color="white" />
        </Pressable>

      </View>
    </View >
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
