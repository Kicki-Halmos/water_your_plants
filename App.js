import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AppLoading from "expo-app-loading";
import { useFonts, GentiumBookBasic_700Bold, GentiumBookBasic_400Regular, } from "@expo-google-fonts/dev";
import {Provider} from "./src/context/PlantContext";
import EditPlantScreen from "./src/screens/EditPlantScreen";
import AddPlantScreen from "./src/screens/AddPlantScreen";
import PlantDetailScreen from './src/screens/PlantDetailScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Add: AddPlantScreen,
    Edit: EditPlantScreen,
    Detail: PlantDetailScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleStyle: {
        alignSelf: "center",
        color: "#075814",
        fontFamily: "GentiumBookBasic_700Bold",
        fontSize: 20
      },
      headerStyle: { backgroundColor: "#FCFBF0" },
      title: "Water Your Plants",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  let [fontsLoaded] = useFonts({
    GentiumBookBasic_700Bold,
    GentiumBookBasic_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    // from the custom App we return the component we assigned to RootApp.
    return (
      <Provider>
        <App />
        </Provider>
    );
  }
};
