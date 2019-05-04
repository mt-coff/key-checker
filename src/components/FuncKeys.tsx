import React from 'react'
import KeyFrame from './KeyFrame'
import styled from 'styled-components'

export default function FuncKeys(props: { inputKey: string }) {
  const FuncKeys = []
  for (let i = 1; i <= 12; i++) {
    FuncKeys.push(
      <Spacing key={i}>
        <KeyFrame inputKey={props.inputKey} keyString={`F${i}`} />
      </Spacing>
    )
  }

  return <>{FuncKeys}</>
}

const Spacing = styled.div`
  margin: 0.5rem;
`
