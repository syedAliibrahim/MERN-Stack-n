require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose')
const activityRouter =require('./routes/activity')
const cors =require ("cors");
const app = express();

app.use(cors());
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
})

app.use('/api/activity',activityRouter)

//DB
mongoose.connect("mongodb+srv://contour:aliibrahim@cluster0.4hxwa4n.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  app.listen(4040, () => {
    console.log('Listening to DB & on PORT 4040');
  });
})
.catch((error)=>{
  console.log(error)
})


// app.listen(4040, () => {
//   console.log('Listening on PORT 4040!');
// });