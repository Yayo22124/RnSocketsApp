import { Button, Icon } from "@rneui/themed";
import { Text, View } from "@/components/Themed";

import { API_URL } from "@/constants/Api";
import { ARDUINO_IP } from "@/constants/ArduinoIp";
import DataCard from "@/components/DataCard";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Sensor } from "../interfaces/sensor";
import { StyleSheet } from "react-native";
import WebSocket from "react-native-websocket";
import { useState } from "react";

export default function TabOneScreen() {
  const saveData = () => {
    const newData: Sensor = dataSensors;

    const req = fetch(`${API_URL}/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  };

  const handleMessage = (message: any) => {
    // Manejo de los datos cada que Websocket recibe un mensaje
    const jsonMessage: Sensor = JSON.parse(message.data);
    console.log("Message: ", jsonMessage);
    setDataSensors(jsonMessage);
  };

  const [dataSensors, setDataSensors] = useState<Sensor>({
    distancia: 0,
    nivelAgua: 0,
    gas: 0,
  });

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <DataCard title="Nivel de Agua">
          <Text>Valor: {dataSensors.nivelAgua} %</Text>
        </DataCard>
        <DataCard title="Distancia">
          <Text>Valor: {dataSensors.distancia} cm</Text>
        </DataCard>
        <DataCard title="Gas">
          <Text>Valor: {dataSensors.gas} ppm</Text>
        </DataCard>
        <View style={{ marginTop: 15 }}>
          <Button radius={"sm"} type="solid" onPress={saveData}>
            Guardar
            <Icon name="save" color="white" />
          </Button>
        </View>
      </View>

      <WebSocket
        url={`ws://${ARDUINO_IP}`}
        onOpen={console.log("Connection opened")}
        onMessage={handleMessage}
        onError={(error: any) => console.log("WebSocket Error:", error)}
        reconnect={true}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
