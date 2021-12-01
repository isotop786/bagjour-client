import { useState } from "react"
import axios from "axios"
import PartnerDashboard from "./PartnerDashboard"


const PartnerLogin = ()=>{

    const [partner, setPartner] = useState({})
    const [auth, setAuth] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     // login function
     const login = (e)=>{
        e.preventDefault();
        // alert('ok')
        if(!email){
            alert('Email can not be empty')
        }

        if(!password){
            alert('Password can not be empty')
        }

        axios.post('https://bagjour.herokuapp.com/partner-signin',{
            email, password
        })
        .then(res =>{
            console.log(res.data)
            setAuth(true)
            // setToken(res.data.token)
            setPartner(res.data.partner)
            console.log(res.data.partner)
            // console.log(partner.firstName)

        })

    }


    return(
        <>
       {auth ? (
           <PartnerDashboard data={partner} />
       )
        :
        <div className="my-4">
                   <h2 className="text-success ">Registration Success!</h2>
                 
                    <div className=" my-4">
                        <h4>Partner Login</h4>
                        <div className="card card-default p-3">
                            <form action="#" onSubmit={login}>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" id=""
                                value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" id=""
                                value={password} onChange={e => setPassword(e.target.value)}
                                
                                />
                            </div>
                            <div>
                                <button 
                                className="btn btn-outline-primary btn-block"
                                type="submit">Login</button>
                            </div>

                            </form>
                        </div>
                    </div>
               </div>
    }

        
               </>
    )
}

export default PartnerLogin