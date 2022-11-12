import { toCanvas } from 'qrcode'
import { useEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

export default function Canvas({ value, setValue}) {

 const ref =  useRef()

  useEffect(() => { 
    if(value.length > 0){
      toCanvas(ref.current,value, function(err){
        if (err) console.error(err)
         console.log('success')
         setValue("")
      })
    }
  }, [value, setValue])
  
  return (
      <canvas ref={ref}>

      </canvas>
  )
}

