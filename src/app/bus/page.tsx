"use client"
import RouteBar from "@gorae-ui-local/components/RouteBar";
import Panel from "@gorae-ui-local/components/Panel";
import BusInfoUnit from "@gorae-ui-local/components/BusInfoUnit";
import { ColorEnum } from "@gorae-ui-local/pages/temp-danverse/ColorEnum";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'

const MainBusPage = () => {

    const [data,setData] = useState<any>(null)

    useEffect(() => {
        setTimeout(() => {
            setData(busData)
        }, 1000)
    }, [])

    const busData = [
        {
            header: "학교 출발",
            buses: [
                { busNumber: "셔틀버스", busStation: "죽전 평화의 광장", busTime: "10:00", lastStation: "3전", initialOpen: true, busColor: ColorEnum.SUTTLE_BUS_COLOR },
                { busNumber: "720-2", busStation: "죽전 평화의 광장", busTime: "10:00", lastStation: "3전", busColor: ColorEnum.SUTTLE_BUS_COLOR },
            ],
        },
        {
            header: "죽전역 출발",
            buses: [
                { busNumber: "셔틀버스", busStation: "죽전 평화의 광장", busTime: "10:00", lastStation: "3전", initialOpen: true, busColor: ColorEnum.VILLAGE_BUS_COLOR },
                { busNumber: "720-2", busStation: "죽전 평화의 광장", busTime: "10:00", lastStation: "3전", busColor: ColorEnum.VILLAGE_BUS_COLOR },
            ],
            hiddenContentShowLabel: "학교 앞까지만 가는 버스",
            hiddenContent: [
                { busNumber: "셔틀버스", busStation: "죽전 평화의 광장", busTime: "10:00", lastStation: "3전", initialOpen: true, busColor: ColorEnum.VILLAGE_BUS_COLOR },
                { busNumber: "720-2", busStation: "죽전 평화의 광장", busTime: "10:00", lastStation: "3전", busColor: ColorEnum.VILLAGE_BUS_COLOR },
            ],
        },
    ];

    return (
        <div style={{ width: "100%",minHeight:"100vh",padding:"12px 12px",backgroundColor:"#f5f5f5",gap:"24px",display:"flex",flexDirection:"column" }}>
            <RouteBar title="공지사항 영역" />
           {!data && 
           <>
            <Skeleton height={200}/>
            <Skeleton height={200}/>
            <Skeleton height={200}/>
            </>
           }
           
            {data && data.map((route:any , index:any) => (
                <Panel key={index} header={route.header} mainContent={
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