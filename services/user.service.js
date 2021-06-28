import  axios from "axios"

export const API_URL_AUTH = "http://localhost:5000/auth/";

export const auth_login =  async data =>{
    const response = await axios.post(
        API_URL_AUTH,
        data
    );
    if (response.data.access_token) {
        localStorage.setItem("user", response.data);
    }
}

export const auth_logout = ()=>{
    localStorage.removeItem("user")
}

export const auth_header = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.access_token){
        return { Authorization: 'JWT ' + user.accessToken };
    }else return {}
}