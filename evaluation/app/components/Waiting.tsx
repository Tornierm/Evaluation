import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height:100%;
  width:100%;
`

const Buttons = styled.div`
  display: flex;
  width:100%;
  align-items: flex-end;
  justify-content: flex-end;
`

const TimerContainer = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: center;
  justify-content: center;
`

  interface IOwnProps {
    goNext: () => void;
} 
  
export default function Waiting(props: IOwnProps) {
    const [secondsLeft, setSecondsLeft] = useState<number>(5);
  
    useEffect(() => {
      // Start the countdown
      const countdownInterval = setInterval(() => {
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(countdownInterval);
    }, []);

  return (
    <Container>
        <TimerContainer>
            {secondsLeft < 0
                ?<div>You can go on. </div>
                :<div>Take some seconds to recover :)
                    <br/>
                    Close your eyes and take a deep breath.
                    <br/>
                    Seconds left: {secondsLeft}</div>
            }
        </TimerContainer>
        <Buttons>
          <Button disabled={secondsLeft > 0} onClick={props.goNext}>Next</Button>
        </Buttons>
    </Container>
  )
}
