import { useState } from "react";
import { Button, View } from "react-native";
import Animated, { Keyframe, Easing } from "react-native-reanimated";

function Square() {
  const [visible, setVisible] = useState(false);

  const easing = Easing.bezier(0.76, 0.0, 0.24, 1.0).factory();
  const animation = new Keyframe({
    from: { transform: [{ translateX: "0%" }] },
    to: {
      transform: [{ translateX: "100%" }],
      easing,
    },
  });

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Button
        title="Toggle"
        onPress={() => setVisible((visible) => !visible)}
      />
      {visible && (
        <Animated.View
          style={{
            width: 200,
            height: 50,
            backgroundColor: "yellow",
          }}
          exiting={animation
            .duration(1000)
            .withCallback(() => console.log("callback!"))}
        />
      )}
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Square />
    </View>
  );
}
