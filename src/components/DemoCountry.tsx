import {  Button, Group, Image } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { mainColor } from "../theme";
interface IProps {
  icon:string,
  link:string
}
export default function DemoCountry({icon,link}:IProps) {
  return (
    <Group gap={0} p={5} style={{ border: `1px solid ${mainColor}`, borderRadius: 5, cursor: "pointer" }} onClick={()=> open(link,'_blank')}>
    <Image
        w={50}
        h={50}
        src={icon}
    />
    <Button p={5} variant="transparent" rightSection={<IconEye />} size="lg">
        {" "}
        معاينة{" "}
    </Button>
</Group>
  )
}