export interface Answer {
    id: number;
    questionId: number;
    answeredBy: string;
    answer: string;
}

export type ICreate = Omit<Answer, 'id'>