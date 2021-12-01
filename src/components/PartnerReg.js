import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PartnerReg = ()=>{

    const [msg,setMsg] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [password, setPassword] = useState('')



    const submitForm = (e)=>{
        e.preventDefault();
       
        // first check nothing empty
        if(!firstName){
            alert('First name can not be empty')
        }

        if(!lastName){
            alert('First name can not be empty')
        }

        if(!email){
            alert('Email can not be empty')
        }

        if(!companyName){
            alert('Company can not be empty')
        }

        if(!password){
            alert('Password can not be empty')
        }


        axios.post('http://localhost:8080/partner-reg',{
            
            firstName,lastName,email,companyName,password
              
        })
        .then((res,error) => {
            if(error){
                console.log(error);
            }

            console.log(res)
            setFirstName('');
            setLastName('');
            setEmail('');
            setCompanyName('');
            setPassword('');
            setMsg('Registration Success!')


        })
        .catch(err=>console.log(err))
        
    }



    return(
        <div className="col-md-6 mt-4">
          <h3>Partner Registration Page</h3>
           {msg !== '' && (
               <div className="my-4">
                   <h4 className="text-success ">{msg}</h4>
                    <Link className="btn btn-danger" to='partner-login'>Login</Link>
               </div>
               
           )}
            <div className="card card-default p-3">
                <form action="#" onSubmit={submitForm}>
                    <div className="form-gorup">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstname" id="" className="form-control" 
                        value={firstName} onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="" className="form-control" 
                        value={lastName} onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" className="form-control" 
                        value={email} onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" name="companyName" id="" className="form-control" 
                        value={companyName} onChange={e => setCompanyName(e.target.value)}
                        />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" className="form-control" 
                        value={password} onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Register"
                        className="btn btn-primary btn-block mt-3"
                        />
                    </div>


                </form>
            </div>

        </div>
    )
}

export default PartnerReg;