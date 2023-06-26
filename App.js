import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LogInScreen from "./src/screens/LogInScreen";

export default function App() {
  return (
    <View style={styles.root}>
      <LogInScreen /*sendUsername={nombreUsuario} sendPassword={constrasenia}*/ />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1A4B8E',
  },
});
