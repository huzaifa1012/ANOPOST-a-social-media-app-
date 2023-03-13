import express from "express"
const app = express()
import mongoose from "mongoose";
import path from 'path';
import cors from "cors"
import dotenv from "dotenv"
import { stringToHash, varifyHash, validateHash } from "bcrypt-inzi"

app.use(cors())
// Models  
import PostModel from "./Models/post schema.mjs"
import UserModel from "./Models/auth schema.mjs"

const port = 3000
dotenv.config()
app.use(express.json())


// DB Conncection
let connect = mongoose.connect(process.env.Database).then(() => { console.log("DB Connected"); })
  .catch((connect) => { console.log("Warning DB Is Not Connected Error :", connect.message); })
// 

// All Request
const __dirname = path.resolve()
app.use('/', express.static(path.join(__dirname, '../Client/anopost/dist/')))


app.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(401).send({ message: "Some field is missing " })
    return;
  }


  try {
    // Hashing password
    let hashedPassword = await stringToHash(password)
    let registerUser = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword
    });
    if (!registerUser) {
      res.status(400).send({ message: "failed to register user" })
      return;
    }
    res.status(200).send({ message: "Register Successful" })

  } catch (error) {
    res.status(400).send({ message: "Register Unsuccessful" })

  }
})


app.post('/signin', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(401).send({ message: "Some field is missing " })
    return;
  }
  try {
    let userRegistered = await UserModel.findOne({ email: email });
    // Check Availablity (email checking from DB)
    if (!userRegistered) {
      res.status(400).send({ message: "Wrong credential" })
      return;
    }
    // 
    // Password checking
    let PasswordMatch = await varifyHash(password, userRegistered.password)
    console.log("Matched or not", PasswordMatch)
    if (!PasswordMatch) {
      res.status(400).send({ message: "wrong crendetial" })
      return;
    }
    res.status(200).send({ message: "Successfully Signed in " })
  } catch (error) {
    res.status(400).send({ message: "Error! (catch has run)" })
  }
})

app.post('/post', async (req, res) => {
  const { name, post } = req.body
  if (!name || !post) {
    res.status(401).send({ message: "Something field is missing " })
    return;
  }
  let savePost = await PostModel.create({
    name: name,
    post: post
  });
  if (!savePost) {
    res.status(400).send({ message: "failed to Post data" })
    return;
  }
  res.status(200).send({ message: "Data Posted" })
})

app.get('/getPost', async (req, res) => {
  let Data = await PostModel.find({})
  console.log(Data)
  res.status(200).send(Data)
})
// 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})