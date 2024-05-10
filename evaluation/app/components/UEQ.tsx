import React, { useState } from 'react'
import styled from 'styled-components'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'

const Container = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const Item = styled.div`
    display: grid;
    grid-template-areas: "left center right";
    grid-template-columns: 120px 1fr 120px;
    gap: 12px;
    width: 100%;
    align-items: center;
`

const Left = styled.p<{ $area: string;}>`
    grid-area: ${props => props.$area};
    text-align: end;
`

const Right = styled.p<{ $area: string;}>`
    grid-area: ${props => props.$area};
`

const Center = styled.div<{ $area: string;}>`
    grid-area: ${props => props.$area};
`

const RadioContainer = styled.div`
    display: flex;
    justify-content: center;
    gap:16px;
`

const Buttons = styled.div`
  display: flex;
  grid-area: buttons;
  width:100%;
  align-items: flex-end;
  justify-content: flex-end;
`

const Data :string[][] = [
    ["obstructive", "supportive"],
    ["complicated", "easy"],
    ["inefficient", "efficient"],
    ["confusing", "clear"],
    ["boring", "exciting"],
    ["not interesting ", "interesting"],
    ["conventional", "inventive"],
    ["usual", "leading edge"],
]

interface IOwnProps {
    goNext: () => void;
    pushAnswerToData: (answer: number[]) => void;
} 

export default function UEQ(props: IOwnProps) {
const [answers, setAnswers] = useState<(number | undefined)[]>([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined])

const saveAnswer = (i: number, val: number) => {
    const tmp = [...answers]
    tmp[i] = val;
    setAnswers(tmp)
}

const submit = () => {
    const areAllNumbers = answers.every((answer) => typeof answer === 'number');
    if(areAllNumbers){
        console.log("are")
        const filteredAnswers = answers.filter((answer) => typeof answer === 'number') as number[];
        props.pushAnswerToData(filteredAnswers)
    } else {
        console.log("are not")
    }
    props.goNext()
}

  return (
    <Container>
        How did you experierience the typeface of the text you just read?
        {Data.map((data, i) => {
            return <Item key={i}>
                <Left $area={"left"}>{data[0]} </Left>
                <Center $area={"center"}>
                    <RadioGroup>
                        <RadioContainer>
                            <RadioGroupItem onClick={() => saveAnswer(i, 1)} value="option-one" id="option-one" />
                            <RadioGroupItem onClick={() => saveAnswer(i, 2)} value="option-two" id="option-two" />
                            <RadioGroupItem onClick={() => saveAnswer(i, 3)} value="option-three" id="option-three" />
                            <RadioGroupItem onClick={() => saveAnswer(i, 4)} value="option-four" id="option-four" />
                            <RadioGroupItem onClick={() => saveAnswer(i, 5)} value="option-five" id="option-five" />
                            <RadioGroupItem onClick={() => saveAnswer(i, 6)} value="option-six" id="option-six" />
                            <RadioGroupItem onClick={() => saveAnswer(i, 7)} value="option-seven" id="option-seven" />
                        </RadioContainer>
                    </RadioGroup>
                </Center>
                <Right $area={"right"}>{data[1]} </Right>
            </Item>
        })}
        <Buttons>
          <Button disabled={answers.includes(undefined)} onClick={submit}>Next</Button>
        </Buttons>
    </Container>
  )
}
