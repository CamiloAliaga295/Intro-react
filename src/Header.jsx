import {Navbar,Container} from 'react-bootstrap'
import './header.css'

//function Header(props){}
const Header= props =>{
  const {title,subtitle} = props
  
  
  return (
        <Navbar className='header'>
          <Container>
            <Navbar.Brand href="#home"><h1>{title}</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {subtitle}
            </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );


}

export default Header