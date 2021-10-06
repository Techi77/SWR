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
        <CopilotStep
          text="This is block #1"
          order={1}
          name="block1"
        >
          <CopilotView style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}>
            <TouchableOpacity onPress={() => this.props.start(false, this.scrollView)}>
              <Text >{`Начать ${"\n"}обучение`}</Text>
            </TouchableOpacity>
          </CopilotView>
        </CopilotStep>
        <ScrollView ref={(ref) => (this.scrollView = ref)} >
          <CopilotStep
            text="This is block #2"
            order={2}
            name="block2"
          >
            <CopilotView style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}>
              <Text>
                Block 2
              </Text>
            </CopilotView>
          </CopilotStep>

          <CopilotStep
            text="This is block #3"
            order={3}
            name="block3"
          >
            <CopilotView style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}>
              <Text>
                Block 3
              </Text>
            </CopilotView>
          </CopilotStep>


          <CopilotStep
            text="This is block #3"
            order={4}
            name="block4"
          >
            <CopilotView style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}>
              <Text>
                Block 4
              </Text>
            </CopilotView>
          </CopilotStep>

          <CopilotStep
            text="This is block #5"
            order={5}
            name="block5"
          >
            <CopilotView style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}>
              <Text>
                Block 5
              </Text>
            </CopilotView>
          </CopilotStep>

          <CopilotStep
            text="This is block #6"
            order={6}
            name="block6"
          >
            <CopilotView style={{ height: 250, width: 250, borderWidth: 2, marginTop: 20 }}>
              <Text>
                Block 6
              </Text>
            </CopilotView>
          </CopilotStep>

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





