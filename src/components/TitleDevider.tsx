import { Divider, Title, rgba } from "@mantine/core";
import { mainColor } from "../theme";
import { useDevicesContext } from "../context/DevicesContext";

export default function TitleDevider({ string }: { string: string }) {
    const { isTabletAndMobile } = useDevicesContext();
    return (
        <Divider
            label={
                <Title
                    px={10}
                    order={isTabletAndMobile ? 2 : 1}
                    ta={"center"}
                    style={{ borderBottom: `8px solid ${rgba(mainColor, 0.8)}`, borderRadius: 10 }}
                >
                    {string}
                </Title>
            }
            w={"100%"}
        />
    );
}
