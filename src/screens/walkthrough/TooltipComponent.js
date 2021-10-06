// modules
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
// global imports
import { WHITE, DARK_GREY, BLUE, GREEN } from "./colors";


export const  TooltipComponent  =  ( {
  isFirstStep ,
  isLastStep ,
  handleNext ,
  handlePrev ,
  handleStop ,
  currentStep ,
} )  =>  (
  <View>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
    </View>
    <View style={[styles.bottomBar]}>
      {
        isFirstStep ?
          <TouchableOpacity onPress={handleStop}>
            <Text style={styles.buttonSkipText}>{`Пропустить ${"\n"}обучение`}</Text>
          </TouchableOpacity>
          : null
      }
      {
        !isFirstStep ?
          <Button
            onPress={handlePrev}
            color = {BLUE}
            labelStyle={styles.buttonBackNext}>
            <Text>Назад</Text>
          </Button>
          : null
      }
      {
        !isLastStep ?
          <Button
            onPress={handleNext}
            color = {BLUE}
            labelStyle={styles.buttonBackNext}>
            <Text>Далее</Text>
          </Button> :
          <Button
            onPress={handleStop}
            color = {GREEN}
            labelStyle={styles.buttonFinish}>
            <Text>Закончить</Text>
          </Button>
      }
    </View>
  </View>
);


const styles = StyleSheet.create({
  tooltipText: {
    maxWidth: wp("60%"),
    fontSize: 15,
  },
  tooltipContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: WHITE,
    width: wp("57%"),
    height: hp("8%"),
    alignSelf: "center",
    alignItems: "center",
  },
  buttonSkipText: {
    color: DARK_GREY,
    fontSize: 15,
    width: wp("28%"),
  },
  buttonBackNext: {
    width: wp("20%"),
    fontWeight: "bold",
  },
  buttonFinish: {
    width: wp("25%"),
    fontWeight: "bold",
  },
});