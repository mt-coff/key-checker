import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type KeyPressed = Boolean

export default function KeyFrame(props: {
  keyString: string
  inputKey: string
}) {
  const [keyPressed, setKeyPressed] = useState<KeyPressed>(false)

  useEffect(() => {
    if (props.keyString.toUpperCase() == props.inputKey) {
      setKeyPressed(() => true)
    }
    return () => {}
  }, [keyPressed, props.inputKey])
  return <KeyShape keyPressed={keyPressed}>{props.keyString}</KeyShape>
}

type KeyShapeProps = {
  keyPressed: Boolean
}
const KeyShape = styled.div`
  height: 2rem;
  min-width: 2rem;
  padding: 0.25rem;
  border: solid 1px #232323;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: KeyShapeProps) =>
    !props.keyPressed ? '#ffffff' : '#19ff19'};
`
