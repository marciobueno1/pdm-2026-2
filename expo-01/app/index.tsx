import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Programação para Dispositivos Móveis</Text>
      <Link href="/listaTarefas">Tarefas</Link>
      <Link href="/listaTarefas" asChild>
        <Pressable style={styles.pressableLink}>
          <FontAwesome5
            name="tasks"
            size={28}
            color="green"
            iconStyle="solid"
          />
          <Text style={styles.link}>Tarefas</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableLink: {
    flexDirection: "row",
  },
  link: {
    marginLeft: 10,
    textDecorationLine: "underline",
  },
});
