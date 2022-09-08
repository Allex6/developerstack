import { ICreate } from "../types/questionTypes";
import { prisma } from './../config/database';

async function createQuestion(questionData: ICreate) {
    
    await prisma.question.create({ data: questionData });

}

async function getQuestions(){

    const questions = await prisma.question.findMany();
    return questions;

}

async function findById(id: number){

    const question = await prisma.question.findUnique({
        where: {
            id
        }
    });

    return question;

}

export {
    createQuestion,
    getQuestions,
    findById
}