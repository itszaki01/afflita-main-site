import { Group, Image, Text } from "@mantine/core"

interface IProps {
    string:string,
}

export default function Feature({string}:IProps) {
  return (
    <Group gap={10} p={5} wrap="nowrap" align="flex-start">
    <Image
        w={30}
        h={30}
        src={'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/tick-mark-icon.svg'}
    />
        <Text fw={800} fz={22}>{string}</Text>
</Group>
  )
}