import Constants from 'expo-constants';
import plantServer from '../api/plantServer';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setupPlantNotifications = async (plant) => 
{

    const expo_token =  await AsyncStorage.getItem("expo_token");
    schedulePushNotification(expo_token);

    
    /*trigger: 
    { 
      seconds: 7 * (60*24),
      repeats: true
  },*/
}



async function schedulePushNotification(token) {
    await Notifications.scheduleNotificationAsync({
      content: {
        to: token,
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: 
      { 
        seconds: 5
    },
    });
  }

