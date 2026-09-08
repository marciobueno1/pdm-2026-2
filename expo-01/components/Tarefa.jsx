import { Button, Switch, Text, View } from "react-native";

export function Tarefa({ tarefa, onUpdate, onDelete, disabled }) {
  function handleConcluidaChange() {
    onUpdate({ ...tarefa, concluida: !tarefa.concluida });
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{tarefa.descricao} </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={tarefa.concluida ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleConcluidaChange}
        value={tarefa.concluida}
        disabled={disabled}
      />
      <Button
        color="red"
        onPress={() => onDelete(tarefa)}
        title="🗑"
        disabled={disabled}
      />
    </View>
  );
}
