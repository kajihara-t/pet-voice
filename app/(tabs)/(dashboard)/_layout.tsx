import { Stack } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function DashboardLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerTitleStyle: {
          fontFamily: 'Roboto',
        },
        // Maintaining consistency with the main tab layout
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
        }}
      />
      {/* Add other dashboard-related screens here as needed */}
    </Stack>
  );
}