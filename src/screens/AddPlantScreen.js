import React, {useContext} from 'react';
import {View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import PlantForm from '../components/PlantForm';
import { Context } from '../context/PlantContext';

const AddPlantScreen = ({navigation}) => {
    const {addPlant} = useContext(Context);

    return <PlantForm
            onSubmit={(name, water, fertilizer, shower) => {
                addPlant(name, water, fertilizer, shower, () => navigation.navigate('Home'));
            }}
    />;

};

PlantForm.defaultProps = {
    initialValues: {
        name: '',
        water: 'Every Day',
        fertilizer: 'No',
        shower: 'No'
    }
}

const styles = StyleSheet.create({});

export default AddPlantScreen;