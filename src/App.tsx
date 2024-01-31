import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Home from "./screens/home/Home";
import DevicesContextProvider from "./context/DevicesContext";

export default function App() {
    return (
        <MantineProvider
            theme={{
                fontFamily: "Cairo, sans-serif",
            }}
        >
            <DevicesContextProvider>
                <Home />
            </DevicesContextProvider>
        </MantineProvider>
    );
}
