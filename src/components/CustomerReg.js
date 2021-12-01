import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomerReg = ()=>{

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


        axios.post('https://bagjour.herokuapp.com/customer-reg',{
            
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
          <h3 className="my-3">Customer Registration Page</h3>
           {msg !== '' && (
               <div className="my-3">
               <h4 className="text-success">{msg}</h4>
               <Link className="btn btn-danger" to='partner-reg'>Login</Link>
               </div>
           )}
            <div className="card  cd card-default bg-light p-3">
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
                        className="btn btn-info btn-block mt-3"
                        />
                    </div>


                </form>
            </div>
            <style jsx>{`
            .cd{
                background:#eee!important;
            }
            
            
            `}</style>
        </div>
    )
}

export default CustomerReg;