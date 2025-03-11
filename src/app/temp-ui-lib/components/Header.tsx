import "../assets/css/gridStyles.css"
const Header = () => {
  return <div  style={{backgroundColor:"rgba(255,255,255,0.4)",padding:"24px", width: "100%", flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed",top:"0",left:"0",right:"0",zIndex:"1000" }}>
    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>GORAE UI</h1>
    <div className="header-container" style={{ display: "flex", gap: "12px",fontSize:"14px",flexDirection:"row",alignItems:"center" }}>
        <span style={{ cursor: "pointer" }}>Home</span>
        <span style={{ cursor: "pointer" }}>Docs</span>
        <span style={{ cursor: "pointer" }}>Github</span> 
    </div>
    <div className="header-button">
        <div style={{cursor:"pointer"}}>MENUS</div>
    </div>
    </div>
};

export default Header;

