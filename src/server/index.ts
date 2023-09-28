import express from 'express'
import { auth } from './auth'
import { api } from './api'

const app = express()
app.use(auth)
app.use(api)
app.listen(3002)
