import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AppLoading from "expo-app-loading";
import { useFonts, GentiumBookBasic_700Bold, GentiumBookBasic_400Regular, } from "@expo-google-fonts/dev";
import {Provider as PlantProvider} from "./src/context/PlantContext";
import EditPlantScreen from "./src/screens/EditPlantScreen";
import AddPlantScreen from "./src/screens/AddPlantScreen";
import PlantDetailScreen from './src/screens/PlantDetailScreen';
import LoadingScreen from "./src/screens/LoadingScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import { setNavigator } from "./src/helpers/navigationRef";
import {Provider as AuthProvider} from './src/context/AuthContext';


const switchNavigator = createSwitchNavigator({
  
    Loading: LoadingScreen,
    LoginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
 
  MainFlow:createStackNavigator({
    Home: HomeScreen,
    Add: AddPlantScreen,
    Edit: EditPlantScreen,
    Detail: PlantDetailScreen
  },
  {
    //initialRouteName: "MainFlow",
    defaultNavigationOptions: {
      headerTitleStyle: {
        alignSelf: "center",
        color: "#075814",
        fontFamily: "GentiumBookBasic_700Bold",
        fontSize: 20
      },
      headerStyle: { backgroundColor: "#FCFBF0" },
      title: "Water Your Plants",
    }},)},
  
  
);

const App = createAppContainer(switchNavigator);

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
      <PlantProvider>
        <AuthProvider>
        <App ref={(navigator)=> {setNavigator(navigator)}}/>
        </AuthProvider>
        </PlantProvider>
    );
  }
};
