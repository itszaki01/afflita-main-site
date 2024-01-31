import { MantineFontSize, Text } from "@mantine/core";
import { ReactNode } from "react";
import { useDevicesContext } from "../context/DevicesContext";

export default function SimpleText({children}:{children:ReactNode}) {
  //ResponsiveSettings
  const { isMobile, isXsMobile, isTablet } = useDevicesContext();
  
  let size1:MantineFontSize
  
  if(isXsMobile){
  size1 = 'sm'
  }else if(isMobile){
  size1 = "md"
  }else if(isTablet){
  size1 = "lg"
  }else{
  size1 = "lg"
  }
  return (
    <Text fw={600} fz={size1}>
    {children}
</Text>
  )
}