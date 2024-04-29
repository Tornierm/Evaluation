'use client'
import "dotenv/config"
import { useState } from "react";
import { Family, FontConfig, Steps, Style, TextStep } from "./components/types";
import TextBox from "./components/TextBox";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import Welcome from "./components/Welcome";
import Finish from "./components/Finish";
import QuestionBox from "./components/QuestionBox";
import { latinSquareTable, questions, texts } from "./Data";
import UEQ from "./components/UEQ";
import Waiting from "./components/Waiting";

const PageContainer = styled.div`
    display: grid;
    width: 600px;
    grid-template-rows: 56px 500px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "nav nav"
      "content content"
    ;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height:100%;
    grid-area: content;
`

const Nav = styled.div`
  display: flex;
  grid-area: nav;
  width: 100%;
  height: 100%;
`



export default function Home() {
  const [step, setStep] = useState<Steps>(Steps.Start)
  const [textStep, setTextStep] = useState<TextStep>(TextStep.Text)

  const latinSquareIndex = Math.floor(Math.random() * 8);

  // insert()
  const config: FontConfig = {
    "family": Family.Times,
    "style": Style["Bold Italic"],
  }

  function incrementSteps(): void {
    if(step==Steps.Finish){
      //nothing 
      return
    } else {
      setStep(step + 1)
    }
  }

  function incrementTextStep(): void {
    if(textStep==TextStep.Timer){
      //nothing 
      setTextStep(TextStep.Text)
    } else {
      setTextStep(textStep + 1)
    }
  }

  function nextStep(): void {
    if(step === Steps.Start){
      incrementSteps()
    } else if(step === Steps.Finish){
      // submit the data
    } else{
      if(textStep === TextStep.Timer){
        incrementSteps()
      } 
      incrementTextStep()
    }
  }

  function getContent(step: Steps, textStep: TextStep): any {
    if(step === Steps.Start){
      return <Welcome goNext={nextStep}></Welcome>
    } else if (step === Steps.Finish){
      return <Finish></Finish>
    } else {
      return getTextContent(step, textStep);
    }
  }

  function getTextConfig(): FontConfig {
    let family: Family;
    let style: Style;

    const thisOrder = latinSquareTable[latinSquareIndex]
    const configIndex = step - 1;
    const number = thisOrder[configIndex];
    if(number > 4){
      family = Family.Arial
    } else {
      family = Family.Times
    }

    if((number % 4) === 0){
      style = Style.Regular
    } else if((number % 4) === 1){
      style = Style.Italic
    } else if((number % 4) === 2){
      style = Style.Bold
    } else {
      style = Style["Bold Italic"]
    }
    let config: FontConfig={
      family: family,
      style: style
    }
    return config;
  }

  function getTextContent(step: Steps, textStep: TextStep): any {
    if(textStep === TextStep.Text){
      return <TextBox goNext={nextStep} text={texts[step - 1]} config={getTextConfig()}></TextBox>
    } else if (textStep === TextStep["Question 1"]){
      return <QuestionBox goNext={nextStep} key={questions[step - 1][0].question} question={questions[step - 1][0]}></QuestionBox>
    } else if (textStep === TextStep["Question 2"]){
      return <QuestionBox goNext={nextStep} key={questions[step - 1][1].question} question={questions[step - 1][1]}></QuestionBox>
    } else if (textStep === TextStep["Question 3"]){
      return <QuestionBox goNext={nextStep} key={questions[step - 1][2].question} question={questions[step - 1][2]}></QuestionBox>
    } else if (textStep === TextStep["Question 4"]){
      return <QuestionBox goNext={nextStep} key={questions[step - 1][3].question} question={questions[step - 1][3]}></QuestionBox>
    } else if (textStep === TextStep["Timer"]){
      return <Waiting goNext={nextStep}/>
    }  else {
      return <UEQ goNext={nextStep}></UEQ>
    }
  }

  function generateHeaderText(): import("react").ReactNode {
    if(step === Steps.Start) {
      return "Welcome";
    } else if(step === Steps.Finish) {
      return "Thank you";
    } else {
      return generateTextHeaderText();
    }
  }

  function generateTextHeaderText() {
    let text: string = "Text " + step + " ";
    if(textStep === TextStep.Usability) {
      return text = text + "Usability Questions";
    } else if(textStep !== TextStep.Text){
      return text = text + TextStep[textStep];
    }
    return text;
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageContainer>
        <Nav>
          {/* {generateHeaderText()} */}
        </Nav>
        <Content>
          {
            getContent(step, textStep)
          }
        </Content>
      </PageContainer>
    </main>
  );
}