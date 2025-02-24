import { PlantlyButton } from "@/components/PlantlyButton";
import { useUserStore } from "@/store/userStore";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={toggleHasOnboarded} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
