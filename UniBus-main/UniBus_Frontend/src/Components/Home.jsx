import React from 'react'
import '../CSS/Home.css'
import NavBar from './NavBar'
function Home() {
  return (
    <div id="frst">
    <NavBar />
    <div className="container-lg Hero">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center text-md-start">
          <div>
            <h2 className="Line1">Effortless Travel, Limitless Possibilities:</h2>
            <div className="Container">
              <h1 className="fw-bolder Line2">UniBus</h1>
              <h6 className='Line3 '>Find your way to campus</h6>
            </div>
          </div>
        </div>
        <div className="col-md-5 text-center text-md-start">
          <img className="HeroImg" src="https://1.bp.blogspot.com/-MmGvfT8A3jY/XpR2iknKlaI/AAAAAAAAOuQ/TirKKCOY_yAD5WYpgFX-t9278ctL0GAyACLcBGAsYHQ/s1600/Sharda%2BUniversity.jpg" alt="Sharda logo" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home