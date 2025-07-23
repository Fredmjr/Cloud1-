import express from 'express'
import userRouter from './routes/user.routes.js';
import path from "path"
import {fileURLToPath} from 'url'

const app = express()

//views, components & files setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);
app.set("view engine", "hbs");
app.set("/views", path.join(__dirname, "views", "components"))

//routes & comtrollers
app.use("/user", userRouter);
app.get("/", (req, res)=>{
  res.render("index");
})

app.listen(8001, ()=>{
  console.log("Application running")
})