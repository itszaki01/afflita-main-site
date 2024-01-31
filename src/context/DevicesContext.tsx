import { useMediaQuery } from "@mantine/hooks";
import { ReactNode, createContext, useContext } from "react";

type DevicesContextProps = {
    isXsMobile: boolean | undefined;
    isMobile: boolean | undefined;
    isTablet: boolean | undefined;
    isDesktop: boolean | undefined;
    isTabletAndMobile: boolean | undefined;
};

const DevicesContext = createContext<DevicesContextProps>({} as DevicesContextProps);

export default function DevicesContextProvider({ children }: { children: ReactNode }) {
    const isXsMobile = useMediaQuery("(max-width: 395px)");
    const isMobile = useMediaQuery("(min-width: 395px) and (max-width: 576px)");
    const isTablet = useMediaQuery("(min-width: 576px) and (max-width: 1025px)");
    const isTabletAndMobile = useMediaQuery("(max-width: 1025px)");
    const isDesktop = useMediaQuery("(min-width: 1025px)");
    return <DevicesContext.Provider value={{ isXsMobile, isMobile, isTablet, isDesktop, isTabletAndMobile }}>{children}</DevicesContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDevicesContext = () => useContext(DevicesContext);
