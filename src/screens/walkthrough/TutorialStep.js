// modules
import React from "react";
import { View} from "react-native";
import { walkthroughable, CopilotStep } from "react-native-copilot";

const WalkthroughableView = walkthroughable(View);

export const TutorialStep = ({ array, insideBlock, style }) => {

  return (
    <CopilotStep
      text = {array.text}
      order ={array.order}
      name = {array.name} >
      <WalkthroughableView style = {style}>
        {insideBlock}
      </WalkthroughableView>
    </CopilotStep>
  );
};