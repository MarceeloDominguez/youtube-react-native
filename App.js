import { useEffect } from "react";
import { LogBox } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return <Navigation />;
}
