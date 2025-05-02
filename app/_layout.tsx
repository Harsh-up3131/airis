import { Slot, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      router.replace("/welcome");
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Let native splash show
  }

  return (
    <View style={styles.splashContainer} onLayout={onLayoutRootView}>
      <Image
        source={require("../assets/images/image.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Airis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#7374C3",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
  },
  title: {
    marginTop: 20,
    fontSize: 28,
    color: "white",
    fontWeight: "600",
  },
});
