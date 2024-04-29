import React from 'react'
import { Family, FontConfig, Style } from './types';
import styled from 'styled-components';
import { Button } from '@/components/ui/button';

interface IOwnProps {
    text: string;
    config: FontConfig;
    goNext: () => void;
} 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Paragraph = styled.p<{ $family: Family; $style: Style}>`
  margin-top: 100px;
  font-family: ${props => props.$family === Family.Arial ? "Arial" :'Times New Roman'};
  font-style: ${props => (props.$style === Style['Bold Italic'] || props.$style === Style.Italic) ? "italic" :'normal'};
  font-weight: ${props => (props.$style === Style['Bold Italic'] || props.$style === Style.Bold) ? "bold" :'normal'};
`

const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`

export default function TextBox(props: IOwnProps) {
  return (
    <Container>
        <Paragraph $family={props.config.family} $style={props.config.style}>
            {props.text}
        </Paragraph>
        <Buttons>
          <Button onClick={props.goNext}>Next</Button>
        </Buttons>
    </Container>
  )
}
