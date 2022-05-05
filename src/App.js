//Requirements
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

//Styling
import "./App.css";

//Components
import Ship from "./components/Ship";

//Models
import LuxuryShip from "./models/LuxuryShip";
import MedicalFrigate from "./models/MedicalFrigate";
import CargoFreighter from "./models/CargoFreighter";
import Lambo from "./models/Lambo";

import Netflix from "./models/Netflix";

function App() {
  return (
    <>
      <Canvas
        colorManagement
        orthographic
        camera={{ position: [-60, 40, -40], zoom: 30 }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
           <ambientLight intensity={0.3} />
          <pointLight intensity={0.5} position={[10, 0, 10]} />
          {/*<pointLight intensity={0.5} position={[10, 0, -10]} /> 
          <pointLight intensity={0.5} position={[-10, 0, 10]} />
          <pointLight intensity={0.5} position={[-10, 0, -10]} /> */}

          {/* Ships */}
          {/* <Ship position={[-15, -3, 10]} name="Luxury Ship">
            <LuxuryShip />
          </Ship>
          <Ship position={[-5, -3, 0]} name="Medical Frigate">
            <MedicalFrigate />
          </Ship>
          <Ship position={[13, -3, 30]} name="Cargo Freighter">
            <CargoFreighter />
          </Ship> */}
          <Ship position={[0, 0, 0]} name="Lambo"> 
            <Netflix />
          </Ship>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
