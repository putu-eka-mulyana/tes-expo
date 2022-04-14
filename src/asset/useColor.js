import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
const useColors = () => {
  const [dartMode, setDartMode] = useState(false);
  useEffect(() => {
    checkThema();
  }, []);
  const checkThema = async () => {
    const isDarkMode = (await AsyncStorage.getItem("dartmode")) == "true";
    if (dartMode !== isDarkMode) {
      setDartMode(isDarkMode);
    }
  };

  const white = dartMode ? "#000" : "#fff";
  const black = dartMode ? "#fff" : "#000";

  return { white, black, checkThema };
};
export default useColors;
