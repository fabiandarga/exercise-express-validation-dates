import { Router } from 'express'
import { getDates, addDate } from '../controller/dates.controller.js'

const datesRouter = new Router();

datesRouter.route('/')
    .get(getDates)
    .post(addDate);


export default datesRouter;