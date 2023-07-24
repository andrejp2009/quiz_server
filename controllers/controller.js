import Results from '../models/resultShema.js';
import Questions from '../models/questionsShema.js';

import questions, { answers, questionGroup } from '../database/quiz_types/data.js';
//import questions, { answers, questionGroup } from '../database/quiz_types/science.js';
//import questions, { answers, questionGroup } from '../database/quiz_types/World.js';

export async function getQuestions(req, res) {
  try {
    const questionType = req.params.id;

    const q = await Questions.findOne({ questionGroup: questionType });
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questionGroup, questions, answers }).then(function () {
      res.json({ msg: 'Data Saved Successfully...!' });
    });
  } catch (error) {
    res.json({ error });
  }
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: 'Questions Deleted Successfully...!' });
  } catch (error) {
    res.json({ error });
  }
}

export async function getResult(req, res) {
  try {
    const userId = req.params.id;

    const r = await Results.findOne({ username: userId });
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}
export async function getAllResultsById(req, res) {
  try {
    const userId = req.params.id;

    const r = await Results.find({ username: userId });
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertResult(req, res) {
  try {
    const { username, questionGroup, result, points, questionCount } = req.body;
    if (!username && !result && !questionGroup) throw new Error('Data Not Provided...!');

    Results.create({ username, questionGroup, result, points, questionCount }).then(function () {
      res.json({ msg: 'Result Saved Successfully...!' });
    });
  } catch (error) {
    res.json({ error });
  }
}

export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: 'Result Deleted Successfully...!' });
  } catch (error) {
    res.json({ error });
  }
}
