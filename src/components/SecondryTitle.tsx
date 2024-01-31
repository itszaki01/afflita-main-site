import { Title } from "@mantine/core";
import { useDevicesContext } from "../context/DevicesContext";

export default function SecondryTitle({string}:{string:string}) {
    const {isTabletAndMobile} = useDevicesContext()
  return (
    <Title ta={'center'} order={isTabletAndMobile ? 3 : 2}>{string}</Title>
  )
}