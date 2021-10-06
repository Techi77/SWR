// modules
import React from "react";
import { View} from "react-native";
import { walkthroughable, CopilotStep } from "react-native-copilot";

const WalkthroughableView = walkthroughable(View);

export const TutorialStep = ({ array, insideBlock,  }) => {

  return (
    <CopilotStep
      text = {array.text}
      order ={array.order}
      name = {array.name} >
      <WalkthroughableView >
        {insideBlock}
      </WalkthroughableView>
    </CopilotStep>
  );
};