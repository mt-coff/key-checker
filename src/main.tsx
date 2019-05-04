import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import AlphabetKeys from './components/AlphabetKeys'
import styled, { createGlobalStyle } from 'styled-components'
import NumKeys from './components/NumKyes'
import FuncKeys from './components/FuncKeys'
import MarkKeys from './components/MarkKeys'

type InputKey = string

function App() {
  const [inputKey, setInputKey] = useState<InputKey>('')

  useEffect(() => {
    const keyDownHandler = (ev: KeyboardEvent) => {
      ev.preventDefault()
      console.log(ev.key)
      setInputKey(() => ev.key.toUpperCase())
      return
    }
    window.addEventListener('keydown', keyDownHandler)
    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [inputKey])
  return (
    <>
      <H1>Key Checker</H1>
      <KeysWrapper>
        <AlphabetKeys inputKey={inputKey} />
      </KeysWrapper>
      <KeysWrapper>
        <NumKeys inputKey={inputKey} />
      </KeysWrapper>
      <KeysWrapper>
        <FuncKeys inputKey={inputKey} />
      </KeysWrapper>
      <KeysWrapper>
        <MarkKeys inputKey={inputKey} />
      </KeysWrapper>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }

  #root {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
  }
`

const H1 = styled.h1`
  width: 100%;
  text-align: center;
`

const KeysWrapper = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 1rem;
`

const root = document.querySelector('#root') as HTMLDivElement
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  root
)
