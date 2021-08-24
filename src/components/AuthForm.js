import React, {useState} from 'react';
import { View,StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({headerText, errorMessage, onSubmit, buttonText}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            onPress={() => onSubmit({email,password})}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default AuthForm;