import { StyleSheet, Text, View, Switch, DevSettings } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useColor from "./asset/useColor";

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const colors = useColor();
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      AsyncStorage.setItem("dartmode", "true");
    } else {
      AsyncStorage.removeItem("dartmode");
    }
    colors.checkThema();
    DevSettings.reload();
  };
  const checkDarkMode = async () => {
    const isDarkMode = (await AsyncStorage.getItem("dartmode")) === "true";
    setIsEnabled(isDarkMode);
  };
  useEffect(() => {
    checkDarkMode();
  }, []);

  return (
    <View style={{ backgroundColor: colors.white }}>
      <Text style={{ color: colors.black }}>ini Header</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
