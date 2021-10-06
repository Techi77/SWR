// modules
import React, {useEffect} from "react";
import {Text, View, ScrollView} from "react-native";
import {copilot, walkthroughable, CopilotStep} from "react-native-copilot";


class Block extends React.Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          height: 200,
          width: 200,
          marginTop: 20
        }}>
        <Text style={{fontSize: 32}}>{this.props.blockNum}</Text>
      </View>
    );
  }
}

const CopilotBlock = walkthroughable(Block);
const CopilotView = walkthroughable(View);

class ProfileScreen extends React.Component {

  componentDidMount() {
    this.props.start(false, this.scrollView);
  }

  render() {
    return (
      <View style={{justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 50}}>
        <ScrollView ref={(ref) => (this.scrollView = ref)} style={{height: "100%" }}>
          <CopilotStep
            text="This is block #1"
            order={1}
            name="block1"
          >
            <CopilotView style={{height: 250, width: 250, borderWidth: 2, marginTop: 20}}>
              <Text>
               Block 1
              </Text>
            </CopilotView>
          </CopilotStep>

          <CopilotStep
            text="This is block #2"
            order={2}
            name="block2"
          >
            <CopilotView style={{height: 250, width: 250, borderWidth: 2, marginTop: 20}}>
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
            <CopilotView style={{height: 250, width: 250, borderWidth: 2, marginTop: 20}}>
              <Text>
                Block 3
              </Text>
            </CopilotView>
          </CopilotStep>

          <CopilotStep
            text="This is block #4"
            order={4}
            name="block4"
          >
            <CopilotView style={{height: 250, width: 250, borderWidth: 2, marginTop: 20}}>
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
            <CopilotView style={{height: 250, width: 250, borderWidth: 2, marginTop: 20}}>
              <Text>
                Block 5
              </Text>
            </CopilotView>
          </CopilotStep>

        </ScrollView>
      </View>
    );
  }
}


export default copilot()(ProfileScreen);





