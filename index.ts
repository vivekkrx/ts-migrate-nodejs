import express, { Request, Response } from 'express'
import { dateObj } from './src/utils'
const app = express()

const PORT = 5000

app.get('/', (req: Request, res: Response) => {
  const date = dateObj(new Date())
  res.send('Date - ' + date.month + ' ' + date.date + ', ' + date.year)
})

app.listen(PORT, () => console.log('Server started @' + PORT))
