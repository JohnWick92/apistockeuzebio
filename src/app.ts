import express, { Response, Request } from 'express'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(router)

app.use((err: Error, resquest: Request, response: Response) => {
  if (err instanceof Error)
    return response.status(400).json({ error: err.message })
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

export default app
