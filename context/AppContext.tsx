// context/AppContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useSegments } from "expo-router";

interface AppContextType {
  completeOnboarding: () => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const segments = useSegments();
  const [initialized, setInitialized] = useState(false);

  // 初期化は一度だけ実行
  useEffect(() => {
    const initializeApp = async () => {
      console.log("ここまで来てる？");
      try {
        let completed = await AsyncStorage.getItem("onboarding_completed");
        console.log("Completed value:", completed);
        console.log("Is DEV?:", __DEV__);

        // DEVモードの場合は、completedの値に関わらずクリアする
        if (__DEV__) {
          console.log("Dev mode: Clearing onboarding status");
          await AsyncStorage.removeItem("onboarding_completed");
          completed = null;
        }

        if (completed === "true") {
          router.replace("/(tabs)/(peek)");
        } else {
          router.replace("/onboarding");
        }
      } catch (error) {
        console.error("Failed to initialize app:", error);
        router.replace("/onboarding");
      } finally {
        setInitialized(true);
      }
    };

    if (!initialized && segments[0] !== undefined) {
      initializeApp();
    }
  }, [initialized, router, segments]);

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboarding_completed", "true");
      router.replace("/(tabs)/(peek)");
    } catch (error) {
      console.error("Failed to complete onboarding:", error);
    }
  };

  return (
    <AppContext.Provider value={{ completeOnboarding }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
