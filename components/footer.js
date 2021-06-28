
import styles from '../styles/Home.module.css'
import { MDBContainer } from 'mdb-react-ui-kit'
const Footer = ()=>(
    <footer className="footer pt-3">
    <MDBContainer className="text-center">
    <h5>
      {' '} Todos los derechos reservados
      <img  src="/vercel.svg" alt="BP Logo" className={styles.logo} />
    </h5>
    </MDBContainer>
  </footer>
)

export default Footer