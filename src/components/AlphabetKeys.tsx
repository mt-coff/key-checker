import React from 'react'
import KeyFrame from './KeyFrame'
import styled from 'styled-components'

export default function AlphabetKeys(props: { inputKey: string }) {
  const alphabetKeys = []
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    alphabetKeys.push(
      <Spacing key={i}>
        <KeyFrame
          inputKey={props.inputKey}
          keyString={String.fromCharCode(i)}
        />
      </Spacing>
    )
  }

  return <>{alphabetKeys}</>
}

const Spacing = styled.div`
  margin: 0.5rem;
`
