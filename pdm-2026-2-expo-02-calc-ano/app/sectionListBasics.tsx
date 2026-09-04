import {SectionList, StyleSheet, Text, View} from 'react-native';

const DATA = [
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
    title: 'J',
    data: [
        'Jackson',
        'James',
        'Jillian',
        'Jimmy',
        'Joel',
        'John',
        'Julie',
    ],
    },
];

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'beige',
    width: '90%'
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

export default SectionListBasics;
