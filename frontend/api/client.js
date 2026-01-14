import axios from "axios";
import { Platform } from "react-native";

// Choose the host based on where the app runs:
const HOST =
    Platform.OS === "android"
        ? "10.0.2.2" // Android Emulator -> your PC localhost
        : "localhost"; // iOS Simulator -> your Mac localhost

export const api = axios.create({
    baseURL: `http://${HOST}:8080`,
    timeout: 10000,
});
