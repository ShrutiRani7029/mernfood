import React from 'react'

export default function Card() {
  return (
      <div>
      <div className="card mt-3" style={{ width: "18rem", "maxHeight": "360px"}}>
          <img src="https://images.unsplash.com/photo-1551881192-002e02ad3d87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Study is Important
            </p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e,i)=>{
                  return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                  )
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              
              <div className="">
                Total Price
              </div>
               

            </div>
          </div>
        </div>
      </div>
  )
}
