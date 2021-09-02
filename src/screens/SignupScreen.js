import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext'
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
    const {state, signup,  clearErrorMessage} = useContext(AuthContext);
  
    return (
        <View>
            <NavigationEvents onWillFocus = {clearErrorMessage} />
            <AuthForm 
            headerText="Sign up to get going with your plant list"
            errorMessage={state.errorMessage}
            buttonText="Sign up"
            onSubmit = {signup}
            />

           <NavLink 
           routeName="Signin"
           text="Already have an account? Sign in instead"
           />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}


const styles = StyleSheet.create({

});

export default SignupScreen;