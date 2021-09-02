import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import plantServer from '../api/plantServer';
import {navigate} from '../helpers/navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return {...state, errorMessage: action.payload};
        case "signin":
            return {errorMessage: "", token: action.payload};
        case "signout":
            return {token: null, errorMessage: ""};
        case "clear_error_message":
            return {...state, errorMessage:""};
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({type:"signin", token: token});
        navigate('Home');
    }
    else{
        navigate('LoginFlow');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type:"clear_error_message"})
}

const signup = dispatch => async ({email, password, expo_token}) => {
    //console.log(email + ' ' + password)
    try{
        const response = await plantServer.post("/signup", {email, password, expo_token});
        console.log(response.data.user)
        await AsyncStorage.multiSet([["token", response.data.token], ["expo_token", response.data.user.expo_token]]);
        dispatch({type: "signin", payload: response.data.token });
        //setNotificationsToken(response.data.user);
        navigate('Home');
    } catch(err) {
        console.log(err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong with signup"
        });
    }
};

const signin = dispatch => async({email,password}) => {
    console.log(email + ' ' + password)
    try{
        const response = await plantServer.post("/signin", {email, password});
        console.log(response.data);
        await AsyncStorage.setItem("token", response.data.token, "user", response.data.user);
        dispatch({type:"signin", payload: response.data.token});
        navigate('Home');
    } catch(err){
        dispatch({
            type:"add_error",
            payload: "Something went wrong with sign in"
        });
         
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem("token");
    dispatch({type:"signout"});
    navigate('LoginFlow');
};

/*const setNotificationsToken = () => async () =>{
    
}*/

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {token:null, errorMessage:""}
);

