import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {Context as PlantContext} from "../context/PlantContext";
import {Context as AuthContext} from "../context/AuthContext";
import Header from "../components/Header";


export default HomeScreen = ({ navigation }) => {
  const {state, deletePlant, getPlants} = useContext(PlantContext);
  //console.log(state);

  const {signout} = useContext(AuthContext)

  useEffect(() => {
    getPlants();
    
    const listener = navigation.addListener('didFocus', () =>{
      getPlants();
      
    })

    return () => {
      listener.remove();
    }
  },[])



  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate('Add')}
      >
        <Text style={styles.buttonStyle}>Add plant</Text>
        <Entypo name="plus" style={styles.iconStyle} />
      </TouchableOpacity>
      <FlatList 
      data={state} 
      keyExtractor={(plant)=> plant._id}
      renderItem={({item})=>{
        return (
          <View style={styles.viewStyle}>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Detail', {id:item.id})}
        >
        <Text style={styles.plantStyle}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletePlant(item.id)}>
          <Entypo name="trash" style={styles.iconStyle}/>
        </TouchableOpacity>
        
        </View>
        )
      }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
      headerRight: () => (
       <Header />
      ),
    };
};



const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#FCFBF0",

    height: "100%",
    width: "100%",
  },
  viewStyle: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    color: "#075814",
    fontSize: 30,
    fontFamily: "GentiumBookBasic_400Regular",
    marginHorizontal: 2,
  },
  plantStyle: {
    color: "#075814",
    fontSize: 25,
    fontFamily: "GentiumBookBasic_400Regular",
    marginHorizontal: 5,
  },
  iconStyle: {
    color: "#075814",
    fontSize: 30,
    marginTop: 8,
  },
});
