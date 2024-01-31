import { Fieldset, Group, Title, Stack, Image } from "@mantine/core";
import { mainColor } from "../theme";
import { useDevicesContext } from "../context/DevicesContext";
import { ReactNode } from "react";

interface IProps {
    title: string;
    icon: string;
    children: ReactNode;
}

export default function FieldSetBox({ title, icon, children }: IProps) {
    const { isTabletAndMobile } = useDevicesContext();

    return (
        <Fieldset
            w={"80%"}
            p={10}
            style={{ border: `1px solid ${mainColor}`, borderRadius: 5 }}
            bg={"transparent"}
            legend={
                <>
                    <Group wrap="nowrap" gap={0} style={{ borderBottom: `4px solid ${mainColor}`, borderRadius: 5 }}>
                        <Title px={10} order={isTabletAndMobile ? 4 : 3} ta={"center"}>
                            {title}
                        </Title>
                        <Image w={40} src={icon} />
                    </Group>
                </>
            }
        >
            <Stack >{children}</Stack>
        </Fieldset>
    );
}
