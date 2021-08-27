import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext'

const Header = () => {
    const {signout} = useContext(AuthContext);

    return(
        <View>
            <TouchableOpacity onPress={signout}>
                <Text style={styles.header}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        color: "#075814",
        fontFamily: "GentiumBookBasic_700Bold",
        fontSize: 20
    }
});

export default Header;