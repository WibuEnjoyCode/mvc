import express from 'express'
import { GetAllUsers, GetUser } from '../controllers/User.controller.js'

const routerUser = express.Router()

routerUser.get('/user', GetAllUsers)
routerUser.get('/user/:id', GetUser)

export { routerUser }
