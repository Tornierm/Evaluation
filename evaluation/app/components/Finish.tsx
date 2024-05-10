import { Button } from '@/components/ui/button'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

interface IOwnProps {
  submit: () => void
}

export default function Finish(props: IOwnProps) {
  return (
    <Container>Thank you for participating in our study. 
      <br/>
      Your contribution was greatly appreciated!
      <Buttons>
        <Button onClick={props.submit}>Submit</Button>
      </Buttons>
    </Container>
  )
}
