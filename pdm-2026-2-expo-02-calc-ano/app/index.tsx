import { calculateAnoNascText } from "@/utils";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function Index() {
  const [idade, setIdade] = useState('');
  let anoNasc = calculateAnoNascText(idade);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Ano Nascimento</Text>
      <View style={styles.viewInput}>
        <Text>Idade: </Text>
        <TextInput
            style={styles.input}
            onChangeText={setIdade}
            value={idade}
            keyboardType="numeric"
          />
      </View>
      <View style={styles.viewInput}>
        <Text>Ano Nascimento: </Text>
        <TextInput
            style={styles.input}
            value={anoNasc}
            readOnly={true}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: 180,
  },
  viewInput: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});