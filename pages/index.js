import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import styles from '../styles/Home.module.css'
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buenapa.ga</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MDBContainer>
        <h1 className={styles.title}>
          Welcome to <a href="https://buenapa.ga">Buenapa.ga</a>
          <MDBBtn>Hola</MDBBtn>
        </h1>

       

      </MDBContainer>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '} todos los derechos reservados
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
