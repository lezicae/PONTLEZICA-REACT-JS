import NavBar from "../NavBar/NavBar";

  const container1 = {display:'flex',alignItems: 'center',margin:0,padding:0,backgroundColor: '#f09433'}
  const box1 = {margin:0,paddingRight:50,height: 80, width: 80}
  const box2 = {margin:0,padding:0}

function Header(){
  return(
    <header style={container1}>
    <img style={box1} src="/Imagenes/Logo-Header.png" alt='LogoHeader'/>
    <NavBar style={box2}/>
    </header>
  )
}

export default Header;