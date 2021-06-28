import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

import  {MDBInputGroup,MDBInput, MDBContainer, MDBRow, MDBBtn, MDBCol}  from "mdb-react-ui-kit"

export default function Login(){
    return (
        <div>
            <Header/>
            <Navbar/>
            <MDBContainer>
                <MDBRow className="pt-4">
                    <MDBCol md="6">
                    <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="gray-text">
                    <MDBInput label="User" icon="user" group type="email"  validate/>
                    <MDBInput   label="Type your password" icon="lock" group type="password" validate />
                   
                    <div className="text-center">
                        <MDBBtn>Login</MDBBtn>
                    </div>
                    </div>
                    </form>
                    </MDBCol>
            </MDBRow>
            </MDBContainer>
            <Footer/>
        </div>
    )
}