import Providers from "@/Providers";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="listaTarefas"
          options={{ title: "Lista de Tarefas" }}
        />
      </Stack>
    </Providers>
  );
}
