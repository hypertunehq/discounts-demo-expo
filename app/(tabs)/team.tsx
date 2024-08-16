import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Text";
import { Colors } from "@/constants/Colors";

export default function Team() {
  return (
    <View style={styles.container}>
      <Text>Coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.background,
    padding: 25,
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
});
