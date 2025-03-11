"use client"
import RouteBar from "@/app/temp-ui-lib/components/RouteBar";
import Panel from "@/app/temp-ui-lib/components/Panel";
import BusInfoUnit from "@/app/temp-ui-lib/components/BusInfoUnit";

import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import { useSearchParams } from "next/navigation";
import { cheonanBusService } from "@/app/domain/bus/cheonanBusService";
import { jukjeonBusService } from "@/app/domain/bus/jukjeonBusService";
import { BusGroupData } from "@/app/domain/bus/busGroupData.types";

const MainBusPage = () => {

    const searchParams = useSearchParams()
    const campus = searchParams.get("campus")
    const [data,setData] = useState<BusGroupData[] | null>(null)

    useEffect(()=>{
        if(campus === "jukjeon"){
            console.log("jukjeon")
            jukjeonBusService.getJukjeonBusInfo()
            .then((data:BusGroupData[])=>{
                setData(data)
            })
        }
        else if(campus === "cheonan"){
            console.log("cheonan")
            cheonanBusService.getCheonanBusInfo()
            .then((data:BusGroupData[])=>{
                setData(data)
            })
        }
    },[])

    return (
        <div style={{ width: "100%",minHeight:"100vh",padding:"12px 12px",backgroundColor:"#f5f5f5",gap:"24px",display:"flex",flexDirection:"column" }}>
            <RouteBar title="다음은 일부 예측된 시간표 입니다" />
           {!data && 
           <>
            <Skeleton height={200}/>
            <Skeleton height={200}/>
            <Skeleton height={200}/>
            </>
           }
           
            {data && data.map((route:any , index:any) => (
                <Panel key={index} header={route.header} headerMute mainContent={
                    <>
                        {route.buses.map((bus:any, busIndex:any) => (
                            <BusInfoUnit key={busIndex} {...bus} />
                        ))}
                    </>
                } hiddenContentShowLabel={route.hiddenContentShowLabel} hiddenContent={
                    <>
                        {route.hiddenContent && route.hiddenContent.map((bus:any, busIndex:any) => (
                            <BusInfoUnit key={busIndex} {...bus} />
                        ))}
                    </>
                }>
                </Panel>
            ))}
        </div>
    )
}

export default MainBusPage