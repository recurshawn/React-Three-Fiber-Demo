import React, { useRef, useState, useFrame } from "react";
import { useSpring, a } from "@react-spring/three";

//Generic Ship mesh wrapper
 export default function Ship({ position, args, color, name, rotation, children }) {
    const mesh = useRef(null);
    //Basic expand state
    const [expand, setExpand] = useState(false);
    // React spring expand animation
    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
    });
  
    // useFrame(() => (mesh.current.rotation.y += 0.01));
    return (
      <a.mesh
        position={position}
        ref={mesh}
        onPointerOver={() => setExpand(true)}
        onPointerOut={() => setExpand(false)}
        onClick={() => console.log(name, mesh)}
        scale={props.scale}
      >
        {children}
      </a.mesh>
    );
  };