import React, {useContext} from 'react';
import {View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import PlantForm from '../components/PlantForm';
import {Context} from '../context/PlantContext';

const EditPlantScreen = ({navigation}) => {
    const {state, editPlant} = useContext(Context);
    const id = navigation.getParam('id')

    const plant = state.find((plant)=> plant.id === id);
    return (
        <PlantForm
        initialValues= {{name: plant.name, water: plant.water, fertilizer: plant.fertilizer, shower: plant.shower}}
        onSubmit={(name, water, fertilizer, shower)=> editPlant(id, name, water, fertilizer, shower, () => navigation.pop())}
        />
            
       
    )
}

const styles = StyleSheet.create({});

export default EditPlantScreen;