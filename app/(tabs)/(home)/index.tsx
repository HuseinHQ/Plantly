import { FlatList, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { usePlantsStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const plants = usePlantsStore((state) => state.plants);
  const router = useRouter();

  return (
    <>
      <StatusBar style="dark" />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContaner}
        data={plants}
        renderItem={({ item }) => <PlantCard plant={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <PlantlyButton
            title="Add your first plant"
            onPress={() => router.navigate("/new")}
          />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContaner: {
    padding: 12,
  },
});
