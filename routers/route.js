import { Router } from 'express';
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes */
router.get('/questions/:id', controller.getQuestions);

router
  .route('/questions')
  //.get(controller.getQuestions) // get request
  .post(controller.insertQuestions) //post request
  .delete(controller.dropQuestions); // delete request

router.get('/result/:id', controller.getResult); // get request
router
  .route('/result')
  .post(controller.insertResult) //post request
  .delete(controller.dropResult); // delete request

router.get('/result/all/:id', controller.getAllResultsById);
export default router;
