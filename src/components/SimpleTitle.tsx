import { Title, TitleOrder } from "@mantine/core";
import { ReactNode } from "react";
import { useDevicesContext } from "../context/DevicesContext";

export default function SimpleTitle({children}:{children:ReactNode}) {
  //ResponsiveSettings
  const { isMobile, isXsMobile, isTablet } = useDevicesContext();
  
  let order:TitleOrder
  
  if(isXsMobile){
    order = 4
  }else if(isMobile){
    order = 4
  }else if(isTablet){
    order = 3
  }else{
    order = 3
  }
  return (
    <Title order={order} w={"fit-content"}>
    {children}
</Title>
  )
}