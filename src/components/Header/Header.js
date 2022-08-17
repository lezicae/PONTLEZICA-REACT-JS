import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

  const container1 = {display:'flex',alignItems: 'center',margin:0,padding:0,backgroundColor: '#f09433'}
  const box1 = {margin:0,paddingRight:50,height: 80, width: 80}
  const box2 = {margin:0,padding:0}

function Header(){
  return(
    <header style={container1}>
    <Link to={"/"}>
      <img style={box1} src="/Imagenes/Logo-Header.png" alt='LogoHeader'/>
    </Link>
    <NavBar style={box2}/>
    </header>
  )
}

export default Header;