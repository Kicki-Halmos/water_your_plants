import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/PlantContext";
import {EvilIcons} from '@expo/vector-icons';

const PlantDetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const plant = state.find(
    (plant) => plant.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>{plant.name} </Text>
      <Text>Water {plant.water}</Text>
      <Text>{plant.fertilizer === 'No' ? 'No Fertilizer' : 'Fertilize ' + plant.fertilizer } </Text>
      <Text>{plant.shower === 'No' ? 'No Shower' : 'Shower'}</Text>
    </View>
  );
};

PlantDetailScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: navigation.getParam("id")})}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlantDetailScreen;
