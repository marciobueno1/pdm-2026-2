import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PageTarefa() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ID = {id}</Text>
    </View>
  );
}
