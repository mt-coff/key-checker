import React from 'react'
import KeyFrame from './KeyFrame'
import styled from 'styled-components'

export default function NumKeys(props: { inputKey: string }) {
  const numKeys = []
  for (let i = '0'.charCodeAt(0); i <= '9'.charCodeAt(0); i++) {
    numKeys.push(
      <Spacing key={i}>
        <KeyFrame
          inputKey={props.inputKey}
          keyString={String.fromCharCode(i)}
        />
      </Spacing>
    )
  }

  return <>{numKeys}</>
}

const Spacing = styled.div`
  margin: 0.5rem;
`
