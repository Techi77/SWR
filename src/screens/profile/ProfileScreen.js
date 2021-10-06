// modules
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";

import { TooltipComponent } from "./../walkthrough/TooltipComponent";
import { TutorialStep } from "../walkthrough/TutorialStep";
import { walkthroughMainScreen } from "../walkthrough/tutorialConstant";


const CopilotView = walkthroughable(View);

class ProfileScreen extends React.Component {



  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 50 }}>
        <TutorialStep
          array={walkthroughMainScreen[1]}
          style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}
          insideBlock={
            <TouchableOpacity onPress={() => this.props.start(false, this.scrollView)}>
              <Text >{`Начать ${"\n"}обучение`}</Text>
            </TouchableOpacity>
          } />
        <ScrollView ref={(ref) => (this.scrollView = ref)} >
          <TutorialStep
            array={walkthroughMainScreen[2]}
            style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}
            insideBlock={
              <Text>
                Block 2
              </Text>
            } />
          <TutorialStep
            array={walkthroughMainScreen[3]}
            style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}
            insideBlock={
              <Text>
                Block 3
              </Text>
            } />

          <TutorialStep
            array={walkthroughMainScreen[4]}
            style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}
            insideBlock={
              <Text>
                Block 4
              </Text>
            } />
          <TutorialStep
            array={walkthroughMainScreen[5]}
            style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}
            insideBlock={
              <Text>
                Block 5
              </Text>
            } />
          <TutorialStep
            array={walkthroughMainScreen[6]}
            style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}
            insideBlock={
              <Text>
                Block 6
              </Text>
            } />

        </ScrollView>
      </View>
    );
  }
}


export default copilot({
  overlay: "svg",
  animated: true,
  stopOnOutsideClick: true,
  verticalOffset: null,
  tooltipComponent: TooltipComponent,
}
)(ProfileScreen);





