export interface Question {
    id: number,
    askedBy: string,
    question: string
}

export type ICreate = Omit<Question, 'id'>