import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
//import { Picker } from "@react-native-picker/picker";
//import BouncyCheckbox from "react-native-bouncy-checkbox";
import ModalDropdown from "react-native-modal-dropdown";
//import DatePicker from '@dietime/react-native-date-picker';
import DatePicker from 'react-native-datepicker';
import moment from "moment";


const PlantForm = ({onSubmit, initialValues}) => {
  const [name, setName] = useState(initialValues.name);
  const [water, setWater] = useState(initialValues.water);
  const [fertilizer, setFertilizer] = useState(initialValues.fertilizer);
  const [shower, setShower] = useState(initialValues.shower);
  const [date, setDate] = useState(new Date());


  /*useEffect(() => {
      let currentDate = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let year = new Date().getFullYear();

      setDate(year + '-' + month + '-' + currentDate)
;  }, [])*/
  console.log(date);

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={(text) => setName(text)} />
      <Text>Water</Text>
      <ModalDropdown
        defaultValue={water}
        options={[
          "Every Day",
          "Every Second Day",
          "Every Third Day",
          "Every Fourth Day",
          "Once A Week",
          "Once Every Other Week",
          "Once A Month",
        ]}
        onSelect={(index, value) => {
          setWater(value);
        }}
      />
        <Text>Date You Last Watered</Text>
            <DatePicker
                placeholder='select date'
                date={date}
                onDateChange={(value) => setDate(value)}           
            />
      <Text>Fertilizer?</Text>
      <ModalDropdown
        defaultValue={fertilizer}
        options={[
          "No",
          "Once A Week",
          "Once Every Other Week",
          "Once A Month",
        ]}
        onSelect={(index, value) => {
          setFertilizer(value);
        }}
      />

      <Text>Shower?</Text>

      <ModalDropdown 
      defaultValue={shower}
      options={['no', 'yes']}
      onSelect={(index,value)=> setShower(value)}
      />

      <Button
      title='Save Plant'
      onPress={() => onSubmit(name, water, fertilizer, shower)}
      />
          
    

      {/*<Picker
        selectedValue={water}
        onValueChange={(itemValue, itemIndex) => setWater(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Every Day" value="1" />
        <Picker.Item label="Every Second Day" value="2" />
        <Picker.Item label="Every Third Day" value="3" />
        <Picker.Item label="Every Fourth Day" value="4" />
        <Picker.Item label="Once A Week" value="7" />
        <Picker.Item label="Once Every Other Week" value="14" />
        <Picker.Item label="Once A Month" value="30" />
      </Picker>
      <Text>Water</Text>
      <Text>Date you last watered</Text>

      <Picker
        selectedValue={fertilizer}
        onValueChange={(itemValue, itemIndex) => setFertilizer(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="No" value="no" />
        <Picker.Item label="Every Second Day" value="no" />
        <Picker.Item label="Once A Week" value="7" />
        <Picker.Item label="Once Every Other Week" value="14" />
        <Picker.Item label="Once A Month" value="30" />
      </Picker>*/}

     

      {/*<BouncyCheckbox isChecked= {checkBox} onPress={() => setCheckbox(true)} />*/}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlantForm;
