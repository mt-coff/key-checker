import React from 'react'
import KeyFrame from './KeyFrame'
import styled from 'styled-components'

export default function MarkKeys(props: { inputKey: string }) {
  const markKeys: JSX.Element[] = []
  const marks = '!"#$%&()-=^~\\|[]{}@`;:+*?/_<>>,.¥'.split('')
  marks.push(
    'Tab',
    'Meta',
    'Alt',
    'Control',
    'Shift',
    'Enter',
    'Backspace',
    'Escape',
    'CapsLock',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
  )
  marks.map((v, i) => {
    markKeys.push(
      <Spacing key={i}>
        <KeyFrame inputKey={props.inputKey} keyString={v} />
      </Spacing>
    )
  })

  return <>{markKeys}</>
}

const Spacing = styled.div`
  margin: 0.5rem;
`
