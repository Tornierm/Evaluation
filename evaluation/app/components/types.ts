export enum Family{
    "Arial" = 0,
    "Times" = 1
}
export enum Style{
    "Regular" = 0,
    "Bold" = 1,
    "Italic" = 2,
    "Bold Italic" = 3
}

export interface FontConfig{
    "family": Family;
    "style": Style;
}

export enum Steps{
    "Start" = 0,
    "Text01"= 1,
    "Text02"= 2,
    "Text03"= 3,
    "Text04"= 4,
    "Text05"= 5,
    "Text06"= 6,
    "Text07"= 7,
    "Text08"= 8,
    "Finish" = 9,
}

export enum TextStep{
    "Text" = 0,
    "Question 1" = 1,
    "Question 2" = 2,
    "Question 3" = 3,
    "Question 4" = 4,
    "Usability" = 5,
    "Timer" = 6
}

export interface Question{
    question: string;
    answers: string[];
}




//Regular, Bold, Italic, and Bold Italic