import express from 'express'
import {all} from 'trim-request'
import { postMessage, getMessage } from '../controllers/message.controller.js'

const router = express.Router()

router.post('/', all, postMessage)
router.get('/:convId', all, getMessage)

export default router