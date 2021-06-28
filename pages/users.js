import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { MDBContainer } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import axios from "axios"
const Users = ()=>{
    const [loaded, setLoaded] =  useState(false)
    const [user, setUser] = useState(null)
    useEffect(()=>{
        axios.get("https://workly-flask.herokuapp.com/users").then(
      res => {
        setLoaded(true)
        setUser(res.data[0])
      }
    )
    })
    return (
        <div>
        <Header/>
        <Navbar/>
        <MDBContainer className="mt-4">
            <h2>Usuarios Page</h2>
          { loaded ?
             <p>{JSON.stringify(user) }</p>
             : 
             <p>cagando...</p>
          } 
        </MDBContainer>
        <Footer/>
        </div>    
    )
}
export default Users