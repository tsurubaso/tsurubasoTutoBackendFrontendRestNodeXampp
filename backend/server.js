const express= require('express');
const cors= require('cors');
const mysql= require('mysql'); 
const app = express();
const dotenv = require("dotenv");
const dbService = require("./dbService");
dotenv.config(); 
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log("app is running");
  });




app.get("/", (request, response) => {
  response.json("Hello World from backend!");
      });

      //read
app.get("/allstudent", (request, response) => {
const db = dbService.getDbServiceInstance();
const result =db.getAllFromStudent();
  
  result
  .then((data) => response.json({data:data}))
  .catch(err=> console.log(err));
  
  
    
  });


      
    