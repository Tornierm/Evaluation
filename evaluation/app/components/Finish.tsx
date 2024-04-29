import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Finish() {
  return (
    <Container>Thank you for participating in our study. 
      <br/>
      Your contribution was greatly appreciated!
    </Container>
  )
}
