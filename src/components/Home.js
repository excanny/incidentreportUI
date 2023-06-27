import React from 'react'


export default function Home() {
  return (
    <>
       
            <div className="bg-dark"> 
         
                <nav className="navbar navbar-expand-sm justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/signup">Signup</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/report">Send a report</a>
                    </li>
                </ul>
                </nav>

      
                <div className="row" style={{marginTop: '13rem'}}>

                    <div className="col text-center text-white">
                
                    <h1 className="display-3 ">SEE SOMETHING</h1>
                    <h3 className="">SAY SOMETHING</h3>

                    </div>
                
                </div>

                <div style={{paddingTop: '12rem'}}>

                </div>
        </div>

    </>
  )
}
