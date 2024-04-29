import { Button } from '@/components/ui/button';
import React from 'react'
import styled from 'styled-components';

interface IOwnProps {
  goNext: () => void;
} 


const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:space-between;
`

export default function Welcome(props: IOwnProps) {
  return (
    <Container>
      <div>Welcome to our study!
      <br/>
      <br/>
We are thrilled to have you participate and contribute to our research. Your insights and input are invaluable as we work towards our goals.
<br/>
<br/>
Thank you for joining us on this journey!
<br/>
<br/>
In the following study, you will be reading text in various typefaces. After each text, we will ask you some questions to assess the understanding of your reading. Next, we will ask you to evaluate your user experience with the selected typeface. Lastly, we will friendly request you to take a 5 second break to be refreshed for the next section of the study.
<br/>
<br/>
Whenever you go to the next page you may not return to the previous. Keep this in mind, before clicking &quot;Next&quot;.
<br/>
<br/>
Click &quot;Next&quot; to begin.
</div>
      <Buttons>
        <Button onClick={props.goNext}>Next</Button>
      </Buttons>
    </Container>
  )
}

