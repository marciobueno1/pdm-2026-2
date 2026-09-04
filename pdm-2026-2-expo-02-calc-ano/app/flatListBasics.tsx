import {FlatList, StyleSheet, Text, View} from 'react-native';

const DATA = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
];

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 25,
    marginHorizontal: 15,
    backgroundColor: 'olive',
    color: 'white',
  },
});

export default FlatListBasics;