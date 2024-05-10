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

export interface SubmissionData{
    latinSquare: number[],
    T1Q1: number,
    T1Q2: number,
    T1Q3: number,
    T1Q4: number,
    UEQ1: number[],
    T2Q1: number,
    T2Q2: number,
    T2Q3: number,
    T2Q4: number,
    UEQ2: number[],
    T3Q1: number,
    T3Q2: number,
    T3Q3: number,
    T3Q4: number,
    UEQ3: number[],
    T4Q1: number,
    T4Q2: number,
    T4Q3: number,
    T4Q4: number,
    UEQ4: number[],
    T5Q1: number,
    T5Q2: number,
    T5Q3: number,
    T5Q4: number,
    UEQ5: number[],
    T6Q1: number,
    T6Q2: number,
    T6Q3: number,
    T6Q4: number,
    UEQ6: number[],
    T7Q1: number,
    T7Q2: number,
    T7Q3: number,
    T7Q4: number,
    UEQ7: number[],
    T8Q1: number,
    T8Q2: number,
    T8Q3: number,
    T8Q4: number,
    UEQ8: number[],
}