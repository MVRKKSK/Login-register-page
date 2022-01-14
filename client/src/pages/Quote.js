import React , {useEffect} from 'react'
import jwt from "jsonwebtoken"
import {useHistory} from "react-router-dom"
const Quote = () => {

    const history = useHistory();

    async function populateQuote(){
        const req = await fetch("http://localhost:2500/api/quote" , {
            headers: {"x-access-token": localStorage.getItem("token")}
        })

        const data = req.json();
        console.log(data);
    }

    useEffect(()=>{
        if(token){
            const user = jwt.decode(token);
            if(!user){
                localStorage.removeItem("token");
                history.replace("/login")
            }
            else{
                populateQuote();
            }
        }
    })

    return (
        <div>
            <h1>Welcome you are successfully logged in </h1>
        </div>
    )
}

export default Quote
