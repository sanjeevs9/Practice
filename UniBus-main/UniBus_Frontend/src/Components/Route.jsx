import React from 'react';
import Stops from "./Stops"; 
import '../CSS/Route.css';

const Routes = () => {
  const route =["1A","1B","1C","2A","2B","2C","2D","3A","3B","3C","3D","3E","4A","4B","4C","4D","5A","5B","5C","6A","6B","7A","7B","8A","8B","9A","9B","14B"];

  return (
    <div className='container-lg Hero3' id="thrd" >
      <div id="page3">
        <h1 className='fw-bold ' id="hd3">Transport Route Plan 2024-25</h1>
        <div className="Flex">
        {route.map((route, index) => (
            <Stops key={index} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Routes;