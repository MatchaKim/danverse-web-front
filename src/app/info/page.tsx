"use client"
import RouteBar from "@gorae-ui-local/components/RouteBar";
import Panel from "@gorae-ui-local/components/Panel";
import Button from "@gorae-ui-local/components/Button";
import JukjeonBusCircle from "../../../public/svg/jukjeon_bus.svg"
import { sendDataToWebView } from "react-webapp-sdk/dist/web/utils/webCommonUtils"
const Info = () => {
    const handleOpenDetail = () => {
        sendDataToWebView({
            action: {
              type: 'webview',
              detail: 'open',
              url: 'https://www.dankook.ac.kr/web/kor/-69'
            },
        })
    }
    return (
        <div style={{ width: "100%",minHeight:"100vh",padding:"12px 12px",backgroundColor:"#f5f5f5",gap:"24px",display:"flex",flexDirection:"column" }}>
            <Panel header="셔틀 시간표 확인" subHeader="2024년 9월 2일(월) ~ 12. 20(금) / 토·일요일, 공휴일 제외" mainContent={
                 <>
                    <span style={{fontSize:"14px",padding:"0 16px"}}>
                        <JukjeonBusCircle />
                    </span>
                    <span style={{fontSize:"14px",padding:"0 16px"}}>
                    <Button onClick={handleOpenDetail} variant="primary" size="medium" width="100%">셔틀 시간표 확인</Button>
                    </span>
                 </>} />
                 <Panel header="후원" subHeader="단버스는 네이버 클라우드 플랫폼의 지원을 통해 안정적으로 운영되고 있습니다." mainContent={
                 <>
                    <span style={{padding:"0 16px"}}>
                    <img src="/img/NCP_color_black2x.png" alt="naver-cloud" width={"50%"} />
                    </span>
                 </>} />
        </div>
    )
}

export default Info