import { Stack, router } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import "../styles/global.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Tasks' }} />
      <Stack.Screen name="add-task" options={{ title: 'Add Task' }} />
      <Stack.Screen name="edit-task" options={{ title: 'Edit Task' }} />
    </Stack>
  );
}