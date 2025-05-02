// app/splash-redirect.tsx
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";

export default function SplashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/welcome");
    }, 200); // wait for router to mount

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
