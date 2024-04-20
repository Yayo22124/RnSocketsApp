import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';

import DataCard from "@/components/DataCard"
import EditScreenInfo from '@/components/EditScreenInfo';
import { Sensor } from '../interfaces/sensor';
import { fetchData } from '../API';

const renderItem = ({ item }: { item: Sensor }) => (
  <DataCard>
    <Text>Distancia: {item.distancia}</Text>
    <Text>Nivel de Agua: {item.nivelAgua}</Text>
    <Text>Gas: {item.gas}</Text>
  </DataCard>
);


export default function TabTwoScreen() {
  const [data, setData] = useState<Sensor[]>([]);

  const getData = async () => {
    try {
      const res = await fetchData();
      setData(res);
    } catch {
      console.log("Error getting data");
      
    }
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
