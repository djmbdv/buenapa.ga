import {  
    MDBNavbar,MDBNavbarToggler, MDBNavbarItem, MDBNavbarLink , MDBNavbarNav, MDBNavbarBrand, 
    MDBIcon, MDBContainer} from "mdb-react-ui-kit"
import Link from "next/link"
const Navbar = ()=>{
  
  return  (
    <MDBNavbar expand='lg' light bgColor='white'>
    <MDBContainer fluid>
      <MDBNavbarBrand>
        Buenapaga
      </MDBNavbarBrand>
      <MDBNavbarToggler
        aria-controls='navbarExample01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <MDBIcon fas icon='bars' />
      </MDBNavbarToggler>
      <div className='collapse navbar-collapse' id='navbarExample01'>
        <MDBNavbarNav right className='mb-2 mb-lg-0'>
          <MDBNavbarItem active>
          <Link passHref={true} href="/">
            <MDBNavbarLink aria-current='page'>
              Home
            </MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
           <Link passHref={true} href="/users">
           <MDBNavbarLink>Users</MDBNavbarLink>
           </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
           <Link passHref={true} href="/login">
           <MDBNavbarLink>Login</MDBNavbarLink>
           </Link>
          </MDBNavbarItem>
          
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>About</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </div>
    </MDBContainer>
  </MDBNavbar>
)
}

export default Navbar