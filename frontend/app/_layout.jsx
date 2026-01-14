import { NativeBaseProvider } from "native-base";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider style={{ flex: 1, paddingHorizontal: 16 }}>
            <NativeBaseProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <Slot />
                </SafeAreaView>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}
