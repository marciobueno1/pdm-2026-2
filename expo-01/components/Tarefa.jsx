import { Pressable, Switch, Text, View } from "react-native";
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";

export function Tarefa({ tarefa, onUpdate, onDelete, onNavigate, disabled }) {
  function handleConcluidaChange() {
    onUpdate({ ...tarefa, concluida: !tarefa.concluida });
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable onPress={() => onNavigate(tarefa.objectId)}>
        <Text>{tarefa.descricao} </Text>
      </Pressable>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={tarefa.concluida ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleConcluidaChange}
        value={tarefa.concluida}
        disabled={disabled}
      />
      <Pressable onPress={() => onDelete(tarefa)} disabled={disabled}>
        <FontAwesome5 name="trash-alt" size={28} color="red" />
      </Pressable>
    </View>
  );
}
