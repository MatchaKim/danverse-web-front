interface StyleCardProps {
    title: string;
    element: React.ReactNode;
}
const StyleCard = ({title,element}:StyleCardProps) => { 
    return <div style={{ width: "320px", height: "280px",alignItems:"center",justifySelf:'center',justifyContent:"center",display:"flex",flexDirection:"column",border:"1px solid lightGray",backgroundColor:"#F5F5F5" }}>
        <div style={{ width: "100%",alignItems:"center",justifyContent:"center",display:"flex",height:"100%" }}>
            {element}
</div>
<div>
    <div style={{ width: "100%" ,padding:"12px 0"}}>{title}</div>
</div>
</div>
}

export default StyleCard;