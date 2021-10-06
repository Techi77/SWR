// modules
import React from "react";
import {Button, Text, View} from "react-native";


const InventoryScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
      <Text>InventoryScreen</Text>
      <Text>ItemID {itemId}</Text>
      <Button
        title="Go to next Inventory"
        onPress={() => navigation.push("Inventory", {itemId: 77})}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default InventoryScreen;
