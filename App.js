import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useColor from "./src/asset/useColor";
import Content from "./src/Content";
import Header from "./src/Header";

export default function App() {
  const colors = useColor();
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <StatusBar style="auto" />
      <Header />
      <Content />
      <Text style={{ color: colors.black }}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
