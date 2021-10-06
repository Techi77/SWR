// modules
import React from "react";
import {Button, Text, View} from "react-native";


const ProfileScreen = ({ navigation }) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to Inventory"
        onPress={() => navigation.navigate("Inventory")}
      />
      <Button title="Go back" onPress={() => navigation.popToTop()} />
    </View>
  );
};



export default ProfileScreen;
