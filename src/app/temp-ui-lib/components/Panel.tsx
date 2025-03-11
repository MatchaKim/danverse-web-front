import { useState } from "react"
import  ArrowDownSvg from "./svg/arrow-down.svg"

interface PanelProps {
    header: string
    subHeader?: string
    mainContent: React.ReactNode
    initialShowHiddenContent?: boolean
    hiddenContentShowLabel? :string
    hiddenContent?: React.ReactNode
    headerMute?: boolean
}

const Panel = ({header,subHeader,mainContent,hiddenContent,initialShowHiddenContent,hiddenContentShowLabel,headerMute}:PanelProps) => {

    const [isOpen,setIsOpen] = useState(initialShowHiddenContent || false)

    return <div style={{padding:"16px 0",display:"flex",flexDirection:"column",backgroundColor:"white",gap:"24px",borderRadius:"4px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <span style={{padding:"0 16px",fontSize:"16px",fontWeight:"600",color:headerMute ? "#707070" : "#222222"}}>{header}</span>
            {subHeader && <span style={{padding:"0 16px",fontSize:"12px",color:"#707070"}}>{subHeader}</span>}  
        </div>
        {mainContent}
        {(hiddenContent && hiddenContentShowLabel) &&
        <div style={{padding:"0 12px", width:"100%"}}>
        <button style={{padding:"12px 0px",fontSize:"12px",color:"#707070",border:"none",cursor:"pointer",borderTop:"2px solid #F6F6F6",backgroundColor:"transparent",width:"100%"}} onClick={() => setIsOpen(!isOpen)}>{hiddenContentShowLabel}

            {
                isOpen && <ArrowDownSvg style={{transform:"rotate(180deg)",marginLeft:"4px"}} />
         
            }
            {       !isOpen && <ArrowDownSvg style={{marginLeft:"4px"}} />}
        </button>
        </div>
        }
        {isOpen && hiddenContent}

    </div>
}

export default Panel;