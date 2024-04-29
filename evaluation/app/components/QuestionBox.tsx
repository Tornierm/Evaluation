import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Question } from './types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface IOwnProps {
    question: Question;
    goNext: () => void;
} 

const QuestionContainer = styled.p`
    display: flex;
    align-items: center;
    grid-area: question;
`

const Container = styled.div`
    display: grid;
    grid-template-areas: 
        "question question"
        "answer1 answer2"
        "answer3 answer4"
        "buttons buttons"
    ;
    grid-template-columns: 1fr, 1fr;
    width: 100%;
    height: 100%;
`

const AnswerContainer = styled.div<{ $position: number;}>`
    display: flex;
    gap: 24px;
    align-items: center;
    grid-area: ${props =>"answer" + props.$position};
    width: 100%;
    height: 100%;
`

const Buttons = styled.div`
  display: flex;
  grid-area: buttons;
  align-items: flex-end;
  justify-content: flex-end;
`

export default function QuestionBox(props: IOwnProps) {

const [active, setActive] = useState<number | undefined>(undefined)

  return (
    <Container>
        <QuestionContainer>
            {props.question.question}
        </QuestionContainer>
        {props.question.answers.map((answer, i) => {
            return <AnswerContainer key={answer} $position={i+1}>
                <Checkbox key={answer + "check"} checked={active == i} onCheckedChange={() => setActive(i)}/>
                <p>{answer}</p>
            </AnswerContainer>
        })}
        <Buttons>
          <Button disabled={active == undefined} onClick={props.goNext}>Next</Button>
        </Buttons>
    </Container>
  )
}