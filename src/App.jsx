import './App.css';
import Scene from "../public/model/Scene";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function App() {

  return (<>

    <Canvas>
      <Environment preset='sunset' />
      <OrbitControls enableZoom={false} />
      <Suspense>
        <Scene />
      </Suspense>
    </Canvas>

  </>)
}


export default App;