import React, {useState, useEffect} from 'react';
import * as Notifications from 'expo-notifications';
//import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { View,StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({headerText, errorMessage, onSubmit, buttonText}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [expoToken, setExpoToken] = useState("");

    useEffect(()=>{
        registerForPushNotificationsAsync();
    },[])
      
      async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        setExpoToken(token);
      }

    return (
        <View>
            <Text>{headerText}</Text>
            <Input 
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Button 
            title={buttonText}
            onPress={() => onSubmit({email:email,password:password,expo_token:expoToken})}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default AuthForm;