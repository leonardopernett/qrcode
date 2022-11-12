import { useState } from "react"
import Canvas from "./Canvas"
import styled from 'styled-components'

export default function Code({ input }) {
 
  const [value, setValue] = useState("")

  const getCodeQR = () => {
    setValue(input.current.value)
  }

  return (
    <DivContainer>
       <input type="text" ref={ input } />
       <button onClick={ getCodeQR }>Generar QR</button>
       <Canvas value={value} setValue={setValue} />
    </DivContainer>
  )
}


const DivContainer = styled.div`
  
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  width: 100%;
  
  input {
     padding: 10px;
     background-color: #fff;
     outline: none;
     border: none;
     border-radius:5px;
     border:2px solid #dddd;
     color: #000;
     margin-bottom:10px;
     &:focus {
      border:2px solid #000;
     }
  }

  button {

    border-radius: 8px;
    padding: 10px;
    background-color: #000;
    font-weight: bold;
    cursor: pointer;

    &:focus{
      outline: 4px auto #000;
    }
  }

`
