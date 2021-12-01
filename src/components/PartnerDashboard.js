
const PartnerDashboard = ({data})=>{

    return(
       <div className="container">
        
              
               <div className="col">

                    <div className="card card-default p-3">
                        <h3>Partner Dashboard</h3>
                        <h5>Welcome {data.firstName}</h5>
                    </div>

               </div>
              
           </div>
     
    )
}

export default PartnerDashboard;