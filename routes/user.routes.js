import express from 'express';
import {allUsers} from '../controllers/user.controller.js'

const router = express.Router();
router.get("/users", (req, res)=>{
  res.send("all users")
})

export default router;