import { ICreate } from "../types/questionTypes";
import * as questionRepository from './../repositories/questionRepository';

async function createQuestion(questionData: ICreate) {
    
    await questionRepository.createQuestion(questionData);

}

async function getQuestions(){

    const questions = await questionRepository.getQuestions();
    return questions;

}

async function findById(id: number){

    const question = await questionRepository.findById(id);
    if(!question) throw new Error('unauthorized');
    return question;

}

export {
    createQuestion,
    getQuestions,
    findById
}