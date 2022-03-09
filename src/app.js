import express from 'express';
import { index } from './routes/index.routes.js';
import datesRouter from './routes/dates.routes.js';

const PORT = 4000

const app = express()
app.use(express.json())

app.get('/', index);
app.use('/dates', datesRouter);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})