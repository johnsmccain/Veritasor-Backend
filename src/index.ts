import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { config } from './config/index.js'
import { attestationsRouter } from './routes/attestations.js'
import { healthRouter } from './routes/health.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors({ origin: config.cors.origin }))
app.use(express.json())

app.use('/api/health', healthRouter)
app.use('/api/attestations', attestationsRouter)

app.listen(PORT, () => {
  console.log(`Veritasor API listening on http://localhost:${PORT}`)
})
