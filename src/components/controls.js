import React, { useRef } from "react"
import { useThree, useRender, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

const Controls = props => {
  const { camera } = useThree()
  const ref = useRef()

  useRender(() => {
    ref.current && ref.current.update()
  })

  return <orbitControls ref={ref} args={[camera]} {...props} />
}

export default Controls
