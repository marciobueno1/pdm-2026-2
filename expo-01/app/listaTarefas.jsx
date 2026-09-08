import { addTarefa, deleteTarefa, getTarefas, updateTarefa } from "@/api";
import { Tarefa } from "@/components/Tarefa";
// import { useTaskFilter } from "@/zustand";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ListaDeTarefas() {
  const [descricao, setDescricao] = useState("");
  // const { filtrarConcluidas, toggleFiltrarConcluidas } = useTaskFilter(
  //   (state) => state,
  // );
  const queryClient = useQueryClient();
  const { data, isFetching, isLoading, isError, error } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const addMutation = useMutation({
    mutationFn: addTarefa,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
      setDescricao("");
    },
    onError: (error) => {
      alert(
        "Servidor indiponível no momento. Tente novamente mais tarde. Erro: " +
          error.message,
      );
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateTarefa,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
    onError: (error) => {
      alert(
        "Servidor indiponível no momento. Tente novamente mais tarde. Erro: " +
          error.message,
      );
    },
  });
  const deleteMutation = useMutation({
    mutationFn: deleteTarefa,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
    onError: (error) => {
      alert(
        "Servidor indiponível no momento. Tente novamente mais tarde. Erro: " +
          error.message,
      );
    },
  });
  function handleAdicionarTarefa() {
    if (!descricao) {
      alert("Digite uma descrição");
      return;
    }
    addMutation.mutate(descricao);
  }
  function handleAtualizarTarefa(tarefa) {
    updateMutation.mutate(tarefa);
  }
  function handleRemoverTarefa(tarefa) {
    deleteMutation.mutate(tarefa);
  }

  let tarefas = data;
  // if (data && filtrarConcluidas) {
  //   tarefas = data.filter((tarefa) => !tarefa.concluida);
  // }

  return (
    <View>
      <Link href="/">Home</Link>
      <View style={styles.hr} />
      {isError && (
        <View>
          <Text style={styles.h2}>Query Error: {error.message}</Text>
          <View style={styles.hr} />
        </View>
      )}
      {addMutation.isError && (
        <View>
          <Text style={styles.h2}>
            Mutation Error: {addMutation.error.message}
          </Text>
          <View style={styles.hr} />
        </View>
      )}
      <Text style={styles.h1}>
        Lista de Tarefas {isLoading && "(carregando...)"}{" "}
        {isFetching && "[buscando...]"}
      </Text>
      <View style={styles.hr} />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChangeText={setDescricao}
        />
        <Button
          onPress={handleAdicionarTarefa}
          disabled={addMutation.isPending}
          title="Adicionar"
        />
      </View>
      <View style={styles.hr} />
      {/* 
      <p>
        Ocultar as tarefas concluídas{" "}
        <input
          type="checkbox"
          checked={filtrarConcluidas}
          onChange={toggleFiltrarConcluidas}
        />
      </p>
      <hr />
      */}
      <FlatList
        data={tarefas}
        renderItem={({ item: tarefa }) => (
          <Tarefa
            key={tarefa.objectId}
            tarefa={tarefa}
            onUpdate={handleAtualizarTarefa}
            onDelete={handleRemoverTarefa}
            disabled={updateMutation.isPending || deleteMutation.isPending}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hr: {
    height: 3,
    backgroundColor: "black",
    marginVertical: 5,
  },
  h1: {
    fontSize: 20,
  },
  h2: {
    fontSize: 16,
  },
});
