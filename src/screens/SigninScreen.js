import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({}) => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View>
            <NavigationEvents onWillFocus = {clearErrorMessage} />
            <AuthForm 
            headerText="Sign in to view your plant list"
            errorMessage={state.errorMessage}
            buttonText="Sign in"
            onSubmit = {signin}
            />

           <NavLink 
           routeName="Signup"
           text="Don't have an account? Sign up instead"
           />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default SigninScreen;