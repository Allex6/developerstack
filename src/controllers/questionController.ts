import { Request, Response } from 'express';
import * as questionService from './../services/questionService';
import * as answerService from './../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  
  const bodyData = req.body;
  await questionService.createQuestion(bodyData);
  res.sendStatus(201);

}

export async function createAnswer(req: Request, res: Response) {
  
  /*const bodyData = req.body;
  const { id } = req.params;
  await answerService.createAnswer(Number(id), bodyData);
  res.sendStatus(201);*/

}

export async function get(req: Request, res: Response) {
  
  const questions = await questionService.getQuestions();
  res.send(questions);

}

export async function getById(req: Request, res: Response) {
  
  const { id } = req.params;
  const question = await questionService.findById(Number(id));
  res.send(question);

}