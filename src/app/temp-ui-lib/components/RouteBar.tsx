import ArrowDownSvg from "./svg/arrow-down.svg"

interface RouteBarProps {
    title: string
    path?: string
}

const RouteBar = ({title,path}:RouteBarProps) => {
    return <div style={{padding:"16px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background: "linear-gradient(to right, rgba(0, 51, 204, 0.7) 0%, rgba(81, 0, 255, 0.7) 100%)",borderRadius:"6px",width:"100%"}}>
            <span style={{fontSize:"14px",color:"white"}}>{title}</span>
            {path && <span><ArrowDownSvg style={{rotate:"270deg",color:"white"}} /></span>}
        </div>
}

export default RouteBar;