//imports
const express = require("express");
const app = express()

const mongoose = require("mongoose");
const UserModel = require ('./models/Users');

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://huzaifahadams:huzaifahadams@cluster0.vm2na8c.mongodb.net/mern_db?retryWrites=true&w=majority"


);
app.get("/getUsers", (req, res)  =>{
    UserModel.find({})
       .then(result => {
           res.json(result);
       })
       .catch(err => {
           res.json(err);
       });
});

app.post("/createUser",  async (req, res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
     
})

const PORT = 3001;
app.listen(PORT, () => { //server connection
    console.log("server started  at port ",PORT)
});


