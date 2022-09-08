import { ICreate } from "../types/answerTypes";
import * as answerRepository from './../repositories/answerRepository';

async function createAnswer(questionId: number, questionData: ICreate) {
    
    /*const dataToSave = {...questionData}
    dataToSave.questionId = questionId;
    await answerRepository.createAnswer(questionData);*/

}

export {
    createAnswer
}