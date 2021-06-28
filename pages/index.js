
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { MDBBtn ,MDBIcon, MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";




export default function Home() {
  return (
    <div >
      <Header/>
      <Navbar/>
      <MDBContainer className="p-3">
        <MDBRow>
          <MDBCol>
          <h1 className={styles.title}>
          Welcome to <a href="https://buenapa.ga">Buenapa.ga</a> <MDBIcon flag='ve' />
        </h1>
          </MDBCol>
          <MDBCol>
            <p>Otra Cosa</p>
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>
      <Footer/>
     
    </div>
  )
}
